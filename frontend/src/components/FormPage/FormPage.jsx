import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createRecipe } from '../../actions/recipes';
import FileBase from 'react-file-base64';
import './FormPage.css';

export default function FormPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const [newRecipe, setNewRecipe] = useState({
        title: "",
        body: "",
        ingredients: [],
        selectedFile: ""
    });

    async function createNewRecipe(e) {
        e.preventDefault();
        dispatch(createRecipe(newRecipe))
            .then(data => {
                console.log(data)
                navigate('/')
            })
            .catch(error => console.log(error));
    };

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if (key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            newRecipe.ingredients.push(trimmedInput)
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }

        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
            e.preventDefault();
            setTags(tagsCopy);
            setInput(poppedTag);
        }

        setIsKeyReleased(false);
    };

    const onKeyUp = () => {
        setIsKeyReleased(true);
    };

    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    };


    return (
        <section className='form-page'>
            <div className='form-container'>
                <h1>Create New Recipe</h1>
                <input className='main-input' type="text" placeholder="Recipe name" value={newRecipe.title} onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })} /> <br />
                <div className="tag-container">
                    {tags.map((tag, index) => (
                        <div key={index} className="tag">
                            {tag}
                            <button onClick={() => deleteTag(index)}>X</button>
                        </div>
                    ))}
                </div>
                <input
                    className='main-input'
                    value={input}
                    placeholder="Ingredients"
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    onChange={e => { setInput(e.target.value) }}
                />
                <textarea className='main-text' type="text" placeholder="How to make it" value={newRecipe.body} onChange={(e) => setNewRecipe({ ...newRecipe, body: e.target.value })} /> <br />
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setNewRecipe({ ...newRecipe, selectedFile: base64 })}
                /> <br />
                <button onClick={createNewRecipe} className="submit">Submit</button>
                <button className='cancel-button'><Link to='/'>Cancel</Link></button>
            </div>
        </section>
    )
};