import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const UnPrivateRoute = ({ component: Component, roles, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Route {...rest} render={props => {
            if (isAuthenticated) {
                console.log('Goatlord? On an unprivate route? The stars have aligned.');
                return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
};

export default UnPrivateRoute;