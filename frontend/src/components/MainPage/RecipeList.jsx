import {useSelector} from 'react-redux';
import Recipe from "./Recipe";

export default function RecipeList() {

    const recipes = useSelector((state) => state.recipes);

    return (
        <section className="recipe-container">
            {recipes.map(recipe => <Recipe key={recipe._id} recipe={recipe} />)}
        </section> 
    )
};