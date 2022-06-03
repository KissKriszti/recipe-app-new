import mongoose from 'mongoose';
import { AmountType } from './enums.js';
const { Schema } = mongoose;

const fridge = new Schema({
    fridge: [{
        ingredientName: {
            type: String
        },
        ingredientAmount: {
            type: Number,
            default: 0,
        },
        ingredientAmountType: {
            type: String,
            default: AmountType.NA,
        },
    }],
    lastModifyDate: {
        type: Date,
        default: new Date(),
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Fridge = mongoose.model('Fridge', fridge);

export default Fridge;