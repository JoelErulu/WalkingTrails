import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

import {IdTokenClient, OAuth2Client} from 'google-auth-library';


export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id, role: existingUser.role }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        
        if(existingUser) return res.status(400).json({ message: "User already exist." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);
    
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, role: ''});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const getUsers = async(req, res)=>{
    try {
        const users = await User.find().sort({ _id: -1 });
        console.log(users);
        res.send(users);
    } catch(err) {
        console.log("Error inbound:");
        console.log(err.message);
        res.status(404).json({ message: err.message });
    }
}
//Assign user with role
export const googleSignIn = async(res) =>{
    try{
        //const token = res?.credential;
        //const CLIENT_ID = '115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com';
        const CLIENT_ID = '982597960982-erndgoimsr551q1vki7nhm9r75jovej5.apps.googleusercontent.com';
        const client = new OAuth2Client(CLIENT_ID);
        const clientSecret = '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';
        //
        // let buff = Buffer.from(res, 'base64');
        // let text = buff.toString('ascii');
        //
        const token = res;
        console.log(token);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        //const result = jwt_decode(res?.credential);
        //const email = result.email;
        //const name =  result.given + result.family_name;
        //const role = '';
        const payload = ticket.getPayload();
        console.log("Below is the payload: "+payload);
        //const userid = payload['sub'];
        const email = payload.email;
        const name =  payload.given + payload.family_name;
    
        const user = await User.findOne({email});
        //check in database
        if(!user){
          await User.create({email, role:''});
        }
        return payload;
    }catch(err){
        console.log(err);
        throw new Error('Invalid Google ID token');
    }
 
}