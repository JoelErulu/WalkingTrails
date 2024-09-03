import mongoose from 'mongoose';

const markerSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lng: Number,
    // description: String,
    // videoUrl: String,
    trail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trail'
    }
});

const Marker = mongoose.model('Marker', markerSchema);

export default Marker;
