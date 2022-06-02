import {useState} from 'react';
import Header from "./Header";
import RecipeList from "./RecipeList";
import './MainPage.css'

export default function MainPage() {

    const [searchInput, setSearchInput] = useState("");

    return (
        <>
            <Header setSearchInput={setSearchInput}/>
            <RecipeList searchInput={searchInput}/>
        </>
    )
}