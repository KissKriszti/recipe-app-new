import axios from 'axios';

const url = 'http://localhost:5000/recipe';

export const getRecipes = () => axios.get(url);
export const createRecipe = newRecipe => axios.post(url, newRecipe);
export const deleteRecipe = id => axios.delete(`${url}/${id}`);
export const updateRecipe = (id, updatedRecipe) => axios.patch(`${url}/${id}`, updatedRecipe);