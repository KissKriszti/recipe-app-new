import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul className='menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/fridge'>Fridge</Link>
                    <li>Planner</li>
                    <li>Settings</li>
                    <li className='exit'>Exit</li>
                </ul>
            </nav>
        </div>
    )
};