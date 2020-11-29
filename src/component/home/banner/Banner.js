import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/Data';
import Slider from '../slider/Slider';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

const Banner = ({handleClick}) => {
    const [hoverPlace, setHoverPlace] = useState([])
    const [display, setDisplay] = useState(false)
    const displayPlace = data[0]

    const handleEnter = (place) => {
        setHoverPlace(place)
        setDisplay(true)
    }

    return (
        <section className="m-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-5">
                    {!display &&
                        <div className="text-white banner-text">
                            <h1>{displayPlace.name}</h1>
                            <p>{displayPlace.description}</p>
                            <Link to="/booking"><button onClick={()=>handleClick(displayPlace)} className="w-50 btn btn-warning">Booking <FontAwesomeIcon className="ml-2" icon={faLongArrowAltRight} /></button></Link>
                        </div>}

                    {display &&
                        <div className="text-white banner-text">
                            <h1>{hoverPlace.name}</h1>
                            <p>{hoverPlace.description}</p>
                            <Link to="/booking"><button onClick={()=>handleClick(hoverPlace)} className="w-50 btn btn-warning">Booking <FontAwesomeIcon className="ml-2" icon={faLongArrowAltRight} /></button></Link>
                        </div>}
                </div>
                <div className="col-md-7">
                    <Slider handleEnter={handleEnter} handleClick={handleClick}/>
                </div>
            </div>
        </section >
    );
};

export default Banner;