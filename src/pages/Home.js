import React from 'react';
import '../styles/Home.css';
import banner from '../assets/food.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home' style={{ backgroundImage: `url(${banner})` }}>
            <header className='headerContainer'>
                <h1>Food Corner</h1>
                <p>WORLD'S MOST DELICIOUS FOODS</p>
                <Link to='/menu'>
                    <button>Order Now</button>
                </Link>
            </header>
        </div>
    );
};

export default Home;
