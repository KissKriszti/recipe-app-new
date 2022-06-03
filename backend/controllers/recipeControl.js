import { Category, AmountType } from "../models/enums.js";
import Recipe from "../models/recipeModel.js";
import Fridge from "../models/fridge.js";

export const getRecipes = async (req, res) => {
    try{
        const data = await Recipe.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getCategory = (req, res) => {
    try{
        res.json(Category)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getAmountTypes = (req, res) => {
    try{
        res.json(AmountType)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getRecipeByID = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await Recipe.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const postRecipe = async (req, res) => {
    let newRecipe = new Recipe(req.body);
    try {
        const recipeToSave = await newRecipe.save()
        res.status(200).json(recipeToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const updateRecipe = async (req, res) => {
    const toBeUpdatedRecipeID = req.params.id
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(toBeUpdatedRecipeID, {
            ...req.body
        })
        res.status(200).json(updatedRecipe)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteRecipe = async (req, res) => {
    const toBeDeletedRecipeID = req.params.id
    try {
        await Recipe.findByIdAndRemove(toBeDeletedRecipeID)
        res.status(200).json({message: 'Post deleted successfully'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteAllRecipes = async (req, res) => {
    try{
        await Recipe.deleteMany();
        res.json("Data has been deleted")
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getIngredients = async (req, res) => {
    try {
        const data = await Fridge.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const postIngredients = async (req, res) => {
    try {
        let newIngredients = new Fridge(req.body);
        const ingredientsToSave = await newIngredients.save();
        res.status(200).json(ingredientsToSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const updateIngredients = async (req, res) => {
    const toBeUpdatedFridgeID = req.params.id
    try {
        const updatedFridge = await Fridge.findByIdAndUpdate(toBeUpdatedFridgeID, {
            ...req.body
        })
        res.status(200).json(updatedFridge)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const deleteAllIngredients = async (req, res) => {
    try{
        await Fridge.deleteMany();
        res.json("Data has been deleted")
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};

export const deleteFridge = async (req, res) => {
    const toBeDeletedFridge = req.params.id
    try {
        await Fridge.findByIdAndRemove(toBeDeletedFridge)
        res.status(200).json({message: 'Fridge deleted successfully'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};