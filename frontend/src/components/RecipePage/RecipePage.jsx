import { useState } from "react";
import { useParams, Link} from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
                            <button className="back-button"><Link to='/'><ArrowBackIcon /> Back</Link></button>
                            <h1>{recipe.title} <ModeEditIcon className="edit-icon" fontSize="large" onClick={() => setIsUpdate(true)} /></h1>
                            <div>
                                {recipe.selectedFile.map((image, i) => <img key={i} src={image} alt=""/>)}
                            </div>
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