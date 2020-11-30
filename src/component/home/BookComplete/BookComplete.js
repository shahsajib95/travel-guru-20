import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { OrderData } from '../../../App';

const BookComplete = () => {

    const [confirmOrder, setConfirmOrder] = useContext(OrderData)
    const placeData = JSON.parse(localStorage.getItem('place'))

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    {placeData.hotelInfo.stayed}<br></br>
                   Stay in  <b>{placeData.name}</b>
                    <div className="row mt-3 ">
                        <div className="col-md-5">
                            <img className="w-100" src={require(`../../../img/luxury.jpg`).default} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h5>{placeData.hotelInfo.hotelLuxury.name}</h5>
                            <small>{placeData.hotelInfo.hotelLuxury.space}</small><br></br>
                            <small>{placeData.hotelInfo.hotelLuxury.condition}</small>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <FontAwesomeIcon icon={faStar} color="yellow" /><small>{placeData.hotelInfo.hotelLuxury.rating}</small>
                                </div>
                                <div>
                                    <p>${placeData.hotelInfo.hotelLuxury.rate}<span className="text-muted">/night</span></p>
                                </div>
                                <div>
                                    <small className="text-muted">${placeData.hotelInfo.hotelLuxury.total} total</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <img className="w-100" src={require(`../../../img/mid.jpg`).default} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h5>{placeData.hotelInfo.hotelMid.name}</h5>
                            <small>{placeData.hotelInfo.hotelMid.space}</small><br></br>
                            <small>{placeData.hotelInfo.hotelMid.condition}</small>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <FontAwesomeIcon icon={faStar} color="yellow" /><small>{placeData.hotelInfo.hotelMid.rating}</small>
                                </div>
                                <div>
                                    <p>${placeData.hotelInfo.hotelMid.rate}<span className="text-muted">/night</span></p>
                                </div>
                                <div>
                                    <small className="text-muted">${placeData.hotelInfo.hotelMid.total} total</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <img className="w-100" src={require(`../../../img/moderate.jpg`).default} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h5>{placeData.hotelInfo.hotelModerate.name}</h5>
                            <small>{placeData.hotelInfo.hotelModerate.space}</small><br></br>
                            <small>{placeData.hotelInfo.hotelModerate.condition}</small>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <FontAwesomeIcon icon={faStar} color="yellow" /><small>{placeData.hotelInfo.hotelModerate.rating}</small>
                                </div>
                                <div>
                                    <p>${placeData.hotelInfo.hotelModerate.rate}<span className="text-muted">/night</span></p>
                                </div>
                                <div>
                                    <small className="text-muted">${placeData.hotelInfo.hotelModerate.total} total</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={require(`../../../img/map.png`).default} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BookComplete;