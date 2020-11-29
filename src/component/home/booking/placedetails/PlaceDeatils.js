import React from 'react';
import BookingFrom from '../bookingFrom/BookingFrom';

const PlaceDeatils = () => {

    const placeData = JSON.parse(localStorage.getItem('place'))

    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="text-white banner-text">
                        <h1>{placeData.name}</h1>
                        <p>{placeData.fullDescription}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <BookingFrom/>
                </div>
            </div>
        </div>
    );
};

export default PlaceDeatils;