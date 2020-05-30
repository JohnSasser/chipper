import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const UnPrivateRoute = ({ component: Component, roles, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Route {...rest} render={props => {
            if (isAuthenticated) {
                console.log('authenticated in unprivate route should return home?');
                return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
            }
            console.log('hello?');
            return <Component {...props} />
        }} />
    );
};

export default UnPrivateRoute;