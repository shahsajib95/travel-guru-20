import React from 'react';
import Banner from './banner/Banner';
import Navbar from './navbar/Navbar';
import './Home.css';

const Home = ({handleClick}) => {
    return (
        <div className="banner">
            <Navbar/>
            <Banner handleClick={handleClick}/>
        </div>
    );
};

export default Home;