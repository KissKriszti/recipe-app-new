import express from 'express';
import { getRecipes, getRecipeByID, postRecipe, deleteRecipe, deleteAllRecipes, updateRecipe } from '../controllers/recipeControl.js';

const router = express.Router();

router.get('/recipe', getRecipes);
router.get('/recipe/:id', getRecipeByID)
router.post('/recipe', postRecipe);
router.patch('/recipe/:id', updateRecipe)
router.delete('/recipe', deleteAllRecipes);
router.delete('/recipe/:id', deleteRecipe);


export default router;