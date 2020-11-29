import React from 'react';
import './Slider.css';
import { useContext } from 'react';
import { PlaceData } from '../../../App';
import { Link } from 'react-router-dom';

const Slider = ({ handleEnter, handleClick }) => {

    const [placeInfo] = useContext(PlaceData)

    return (
        <div>
            <Link to="/booking">
                {placeInfo.length &&
                    placeInfo.map(place =>
                        <img key={place.id}
                            onClick={() => handleClick(place)}
                            onMouseEnter={() => handleEnter(place)}
                            className="slider-image m-2"
                            alt="carousel"
                            src={require(`../../../img/${place.img}`).default}
                        />)}
            </Link>
        </div>
    );
};

export default Slider;