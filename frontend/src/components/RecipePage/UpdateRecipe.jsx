import { useState } from "react";
import { useDispatch } from "react-redux"; 
import {updateRecipe} from '../../actions/recipes';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function UpdateRecipe({ recipe, setIsUpdate }) {

    const dispatch = useDispatch();
    const { _id, title, body, ingredients, selectedFile } = recipe;
    const [newIngredient, setNewIngredient] = useState("")
    const [updatedData, setUpdatedData] = useState({
        title: title,
        body: body,
        ingredients: ingredients
    });


    function removeIngredient(e) {
        let toBeRemovedItem = e.target.parentElement.previousElementSibling.innerText
        const ingredientList = updatedData.ingredients

        const newList = ingredientList.filter(ingredient => ingredient !== toBeRemovedItem)
        return setUpdatedData({...updatedData, ingredients: newList})
    };

    function addNewIngredient() {
        const ingredientList = updatedData.ingredients
        ingredientList.push(newIngredient)
        setNewIngredient("")
        return setUpdatedData({...updatedData, ingredients: ingredientList})
    };

    function sendUpdate(e) {
        e.preventDefault();
        dispatch(updateRecipe(_id, updatedData));
        setIsUpdate(false)
    };

    return (
        <div className="centered-container">
            <input className="recipe-title2" type="text" placeholder={title} value={updatedData.title} onChange={(e) => setUpdatedData({...updatedData, title: e.target.value})}/> <br />
            <img src={selectedFile} alt="" />
            <h4>Ingredients:</h4>
            <div className="ingredient-holder">
                {updatedData.ingredients.map((ingredient, index) => (
                    <div className="ingredient-container" key={index}>
                        <span className="ingredient-item">{ingredient}</span>
                        <button onClick={removeIngredient}><RemoveCircleOutlineIcon fontSize="small"/></button>
                    </div>
                ))}
            </div>
            <input className="new-recipe-input" type="text" placeholder="Ingredient" value={newIngredient} onChange={(e) => setNewIngredient(e.target.value)} />
            <button className="add-new-button" onClick={addNewIngredient}>Add New</button>
            <h4>Preparations:</h4>
            <textarea type="text" placeholder={body} value={updatedData.body} onChange={(e) => setUpdatedData({...updatedData, body: e.target.value})} />
            <button className="save-button" onClick={sendUpdate}>Save</button>
            <button className="cancel-button" onClick={() => setIsUpdate(false)}>Cancel</button>
        </div>
    )
};