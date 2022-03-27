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
    //handling show or hidden the menu with resizing browser
    const pageWidth = window.matchMedia('(min-width: 600px)');
    const handleMenu = () => {
        if (pageWidth.matches) {
            setShowMenu(false);
        }
    };
    pageWidth.addListener(handleMenu);

    return (
        <div className='navbar'>
            <div className='leftSide' id={showMenu ? 'open' : 'close'}>
                <img src={logo} alt='logo' />
                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
