import {Link} from 'react-router-dom';

export default function Header({setSearchInput}) {

    return (
        <div className="header">
            <input type="text" placeholder="Type a recipe" onChange={(e) => setSearchInput(e.target.value)} />
            <Link to='/form' className="add-new">Add New Recipe</Link>
        </div>
    )
};