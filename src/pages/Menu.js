import React from 'react';
import '../styles/Menu.css';
import { FoodData } from '../data/FoodData';
import MenuItem from '../components/MenuItem';

const Menu = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Menu</h1>
            <div className='menuList'>
                {FoodData.map((menuItem, key) => (
                    <MenuItem key={key} data={menuItem} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
