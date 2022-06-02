import mongoose from 'mongoose';
const { Schema } = mongoose;

const recipe = new Schema({
    title: String,
    body: String,
    ingredients: [{
        type: String
    }],
    selectedFile: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Recipe = mongoose.model('Recipe', recipe);

export default Recipe;