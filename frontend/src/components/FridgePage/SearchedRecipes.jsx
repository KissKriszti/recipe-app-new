import { useSelector } from "react-redux";

export default function SearchedRecipes({setRecipeSearch, fridgeIngredients}) {

    const recipes = useSelector(state => state.recipes);
    
    return (
        <div className="searched-recipe-container">
            <button className="back-button" onClick={() => setRecipeSearch(false)}>Back</button>
            <div className="small-recipe-list">
                {recipes.filter(recipe => {
                    return fridgeIngredients.some(i => recipe.ingredients.includes(i))
                }).map(recipe => (
                    <div>
                        <img key={recipe._id} src={recipe.selectedFile} alt=""/>
                        <h4 >{recipe.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
};