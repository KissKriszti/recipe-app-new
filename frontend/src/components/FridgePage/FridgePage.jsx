import { useState } from 'react';
import SearchedRecipes from './SearchedRecipes';
import closedFridge from '../../images/closed-fridge.png';
import openEmptyFridge from '../../images/open-empty-fridge.png';
import openFilledFridge from '../../images/open-filled-fridge.png';
import './FridgePage.css';

export default function FridgePage() {

    const [isFridgeOpen, setIsFridgeOpen] = useState(false);
    const [fridgeIngredients, setFridgeIngredients] = useState([]);
    const [ingredientInput, setIngredientInput] = useState('');
    const [isKeyReleased, setIsKeyReleased] = useState(false);
    const [recipeSearch, setRecipeSearch] = useState(false);

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = ingredientInput.trim();

        if (key === 'Enter' && trimmedInput.length && !fridgeIngredients.includes(trimmedInput)) {
            e.preventDefault();
            setFridgeIngredients(prevState => [...prevState, trimmedInput]);
            setIngredientInput('');
        }

        if (key === "Backspace" && !ingredientInput.length && fridgeIngredients.length && isKeyReleased) {
            const tagsCopy = [...fridgeIngredients];
            const poppedTag = tagsCopy.pop();
            e.preventDefault();
            setFridgeIngredients(tagsCopy);
            setIngredientInput(poppedTag);
        }

        setIsKeyReleased(false);
    };

    const onKeyUp = () => {
        setIsKeyReleased(true);
    };

    const deleteTag = (index) => {
        setFridgeIngredients(prevState => prevState.filter((tag, i) => i !== index))
    };

    return (
        <section className="fridge-page">
            <div>
                <h2>Open your Fridge and let's see what's inside!</h2>
                <div className="fridge-container">
                    <img className='clickable-image' onClick={() => setIsFridgeOpen((prev) => !prev)} src={isFridgeOpen ? fridgeIngredients.length > 4 ? openFilledFridge : openEmptyFridge : closedFridge} alt="" />
                    {!recipeSearch ? <div className='add-ingredients-container'>
                        <h3>Fill up your fridge with ingredients</h3>
                        <input type="text" placeholder='Type an ingredient, hit enter' onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp} value={ingredientInput} onChange={e => { setIngredientInput(e.target.value) }}/>
                        <div className='ingredient-list-container'>
                            <div className="tag-container">
                                {fridgeIngredients.map((tag, index) => (
                                    <div key={index} className="tag">
                                        {tag}
                                        <button onClick={() => deleteTag(index)}>X</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => fridgeIngredients.length > 0 && setRecipeSearch(true)} className='search-button'>Search Recipes</button>
                    </div> :
                    <SearchedRecipes setRecipeSearch={setRecipeSearch} fridgeIngredients={fridgeIngredients}/>}
                </div>
            </div>
        </section>
    )
};