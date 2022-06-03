import mongoose from 'mongoose';
import { AmountType, Category } from './enums.js';
const { Schema } = mongoose;

const recipe = new Schema({
    title: String,
    body: String,
    ingredients: [{
        type: String,
        ingredientsAmount: {
            type: Number,
            default: 1,
        },
        ingredientsAmountType: {
            type: String,
            default: AmountType.NA,
        },
    }],
    category: [{
        type: String,
        default: Category.MEAT,
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