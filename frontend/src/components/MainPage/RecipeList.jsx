import {useSelector} from 'react-redux';
import Recipe from "./Recipe";

export default function RecipeList({searchInput}) {

    const recipes = useSelector((state) => state.recipes);

    return (
        <section className="recipe-container">
            {recipes.filter(recipe => searchInput.length > 2 ? recipe.title.toLowerCase().includes(searchInput.toLowerCase()) : recipe).map(recipe => <Recipe key={recipe._id} recipe={recipe} />)}
        </section> 
    )
};