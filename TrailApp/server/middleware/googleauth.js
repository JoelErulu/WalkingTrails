import User from '../models/user.js';
const { OAuth2Client } = require('google-auth-library');


const CLIENT_ID = '115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const verifyGoogleIdToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    
    //Verify the email and check if the user exists within the database
    const email = payload.email;

    const user = await User.findOne({email});

    if(!user){
      await User.create({email, role:''});
    }

  } catch (error) {
    console.error(error);
    throw new Error('Invalid Google ID token');
  }
};

export default verifyGoogleIdToken;