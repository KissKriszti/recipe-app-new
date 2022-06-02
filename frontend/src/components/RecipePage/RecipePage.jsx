import { useState } from "react";
import { useParams} from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import UpdateRecipe from "./UpdateRecipe";
import './RecipePage.css';

export default function RecipePage({recipes}) {

    const {id} = useParams();
    const [isUpdate, setIsUpdate] = useState(false);

    return (
        <section className="clicked-recipe-container">
            {!isUpdate ?
                recipes.filter(recipe => recipe._id === id)
                    .map(recipe => (
                        <div key={recipe._id} className="centered-container">
                            <h1>{recipe.title} <ModeEditIcon className="edit-icon" fontSize="large" onClick={() => setIsUpdate(true)} /></h1>
                            <img src={recipe.selectedFile} alt="" />
                            <h4>Ingredients:</h4>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <h4>Preparations:</h4>
                            <p>{recipe.body}</p>
                        </div>
                ))
                :
                recipes.filter(recipe => recipe._id === id)
                    .map(recipe => (
                        <UpdateRecipe key={recipe._id} recipe={recipe} setIsUpdate={setIsUpdate}/>
                ))                    
            }
        </section>
    )
};