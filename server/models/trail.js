import mongoose from 'mongoose';

const trailSchema = mongoose.Schema({
    name: String,
    path: {
        type: { type: String, enum: ['LineString'], required: true },
        coordinates: [[Number]]
    },
    description: String
});

trailSchema.index({ path: '2dsphere' });

const TrailDetail = mongoose.model('Trail', trailSchema);

export default TrailDetail;
