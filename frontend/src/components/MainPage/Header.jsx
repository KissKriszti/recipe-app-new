import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <div className="header">
            <input type="text" placeholder="search" />
            <Link to='/form' className="add-new">Add New Recipe</Link>
        </div>
    )
};