import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const AdminRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    return (
        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            if (!user.isAdmin) {
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
};

export default AdminRoute;