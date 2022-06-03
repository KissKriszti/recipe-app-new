import express from 'express';
import { getRecipes, getRecipeByID, postRecipe, deleteRecipe, deleteAllRecipes, updateRecipe, getCategory, getAmountTypes, postIngredients, getIngredients, deleteAllIngredients, deleteFridge, updateIngredients } from '../controllers/recipeControl.js';

const router = express.Router();

router.get('/recipe', getRecipes);
router.get('/recipe/:id', getRecipeByID)
router.get('/category', getCategory);
router.get('/ingredients', getIngredients)
router.get('/amount', getAmountTypes);
router.post('/recipe', postRecipe);
router.post('/ingredients', postIngredients);
router.patch('/recipe/:id', updateRecipe);
router.patch('/fridge/:id', updateIngredients);
router.delete('/recipe', deleteAllRecipes);
router.delete('/recipe/:id', deleteRecipe);
router.delete('/ingredients', deleteAllIngredients);
router.delete('/fridge/:id', deleteFridge);


export default router;