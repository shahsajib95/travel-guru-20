import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserData } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedIn] = useContext(UserData)
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                loggedIn.email ? (
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