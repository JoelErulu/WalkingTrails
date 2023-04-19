import mongoose from 'mongoose';

const MarkerSchema = mongoose.Schema({
    lat: Number,
    lng: Number,
    name: String,
    color: String,
    img: String,
    exercise: String,
});

const Marker = mongoose.model('Marker', MarkerSchema);

export default Marker;