import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const UserRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    return (
        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
};

export default UserRoute;