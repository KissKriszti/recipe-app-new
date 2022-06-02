import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getRecipes} from './actions/recipes';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import FormPage from './components/FormPage/FormPage';
import RecipePage from './components/RecipePage/RecipePage';

function App() {

  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch, recipes]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/form' element={<FormPage />}/>
            <Route path='/:id' element={<RecipePage recipes={recipes}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

