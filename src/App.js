import './App.css';
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './component/home/Home';
import data from './component/Data/Data';
import Booking from './component/home/booking/Booking';
import Login from './component/login/Login';
import NavbarBlack from './component/home/navbar/NavbarBlack';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const PlaceData = createContext()
export const UserData = createContext()

function App() {
  const [placeInfo, setPlaceInfo] = useState([])
  const [selectedPlace, setSelectedPlace] = useState([])
  const [loggedIn, setLoggedIn] = useState([])
  console.log(loggedIn)
  useEffect(() => {
    setPlaceInfo(data)
  }, [])

  const handleClick = (place) => {
    setSelectedPlace(place)
    localStorage.setItem('place', JSON.stringify(place))
  }

  return (

    <PlaceData.Provider value={[placeInfo, setPlaceInfo]}>
      <UserData.Provider value={[loggedIn, setLoggedIn]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home handleClick={handleClick} />
            </Route>
            <PrivateRoute path='/booking'>
              <Booking selectedPlace={selectedPlace} />
            </PrivateRoute>
            <Route path='/login'>
              <NavbarBlack />
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserData.Provider>
    </PlaceData.Provider>
  );
}

export default App;
