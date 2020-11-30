import React, { useContext } from 'react';
import './NavbarBlack.css'
import { Link } from 'react-router-dom';
import logo from '../../../img/logo/logoBlack.png';
import { UserData } from '../../../App';

const NavbarBlack = () => {
    const [loggedIn, setLoggedIn] = useContext(UserData)
    return (
        <nav className="navbar navbar-expand-lg navbar-light container p-4">
            <Link to="/" className="w-25"><img className="w-50" src={logo} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link ml-4">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link ml-4">Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link ml-4">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link ml-4">Contact</Link>
                    </li>
                    <li className="nav-item">
                        {loggedIn.email && <span className="nav-link ml-4">{loggedIn.name}</span>}
                    </li>
                </ul>
                {loggedIn.email ? <a href="/" className="nav-link ml-4"><button className="btn btn-warning" onClick={()=>setLoggedIn()}>SignOut</button></a>
                : <Link to="/login" className="nav-link ml-4"><button className="btn btn-warning">Login</button></Link>}

            </div>
        </nav>
    );
};

export default NavbarBlack;