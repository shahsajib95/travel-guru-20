import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo/logo.png';
import { UserData } from '../../../App';

const Navbar = () => {

    const [loggedIn, setLoggedIn] = useContext(UserData)
    const logOut = () =>{
        setLoggedIn()
        localStorage.removeItem('rememberMe')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('place')
        localStorage.removeItem('order')
        localStorage.removeItem('token')
    }
    return (
        <nav className="navbar navblack navbar-expand-lg navbar-light text-warning container p-3">
            <Link to="/" className="navbar-brand w-25"><img className="w-50" src={logo} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control" type="search" placeholder="Search Your Destination" />
                    </form>
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
                        {loggedIn.email && <span className="nav-link ml-4">{loggedIn.name}</span>}
                    </li>
                </ul>
                {loggedIn.email ? <a href="/" className=" nav-item ml-4"><button className="btn btn-warning" onClick={() => logOut()}>SignOut</button></a>
                    : <Link to="/login" className=" nav-item ml-4"><button className="btn btn-warning">Login</button></Link>}

            </div>
        </nav>
    );
};

export default Navbar;