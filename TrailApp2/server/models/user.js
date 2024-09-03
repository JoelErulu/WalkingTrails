import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String },
    id: { type: String },
    gender: { type: String, required: false }, 
    ethnicity: { type: String, required: false }, 
    age: { type: Number, required: false } 
});

export default mongoose.model('User', userSchema);
