import mongoose from 'mongoose';

const trailSchema = mongoose.Schema({
    title: String,
    location: String,
    distance: Number,
    qr: Number,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

export default mongoose.model('TrailDetail', trailSchema);