import * as api from '../api';

export const getRecipes = () => async (dispatch) => {
    try {
        const {data} = await api.getRecipes();
        dispatch({type: 'GET_ALL', payload: data})
    } catch (error) {
        console.log(error)
    }
};

export const createRecipe = newRecipe => async dispatch => {
    try {
        const {data} = await api.createRecipe(newRecipe)
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
};

export const updateRecipe = (id, updatedRecipe) => async dispatch => {
    try {
        const {data} = await api.updateRecipe(id, updatedRecipe)
        dispatch({type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error)
    }
};

export const deleteRecipe = id => async dispatch => {
    try {
        await api.deleteRecipe(id);
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error)
    }
};