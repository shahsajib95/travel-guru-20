import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserData } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedIn, setLoggedIn] = useContext(UserData)
    const token = localStorage.getItem('token')

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    (loggedIn.email || token) ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </div>
    );
};

export default PrivateRoute;