import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul className='menu'>
                    <Link to='/'><HomeIcon fontSize="large"/></Link>
                    <Link to='/fridge'><KitchenIcon fontSize="large"/></Link>
                    <li className='exit'><ExitToAppIcon fontSize="large"/></li>
                </ul>
            </nav>
        </div>
    )
};