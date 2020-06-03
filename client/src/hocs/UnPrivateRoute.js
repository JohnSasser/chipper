import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


const UnPrivateRoute = ({ component: Component, roles, ...rest }) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    return (
        <Route {...rest} render={props => {
            if (isAuthenticated) {
                console.log('Goatlord? On an unprivate route? The stars have aligned.');
                if (user.isAdmin) {
                    return <Redirect to={{ pathname: '/adminPage', state: { from: props.location } }} />
                } else {
                    return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
                }
            } else {
                return <Component {...props} />
            }
        }} />
    );
};

export default UnPrivateRoute;