import mongoose from 'mongoose';

const nutritionSchema = mongoose.Schema({
    name: String,
});

const Nutrition = mongoose.model('nutrition', nutritionSchema);

export default Nutrition;