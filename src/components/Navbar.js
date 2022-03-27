import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
//style & icons
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleNavbar = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className='navbar'>
            <div className='leftSide' id={showMenu ? 'open' : 'close'}>
                <img src={logo} alt='logo' />
                <div className='hiddenLinks'>
                    <Link to='./'>Home</Link>
                    <Link to='./'>Menu</Link>
                    <Link to='./'>About</Link>
                    <Link to='./'>Contact</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='./'>Home</Link>
                <Link to='./menu'>Menu</Link>
                <Link to='./'>About</Link>
                <Link to='./'>Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
