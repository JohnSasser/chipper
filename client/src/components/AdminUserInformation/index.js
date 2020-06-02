import React from 'react';

const AdminUserInformation = props => {
    const { username, phone, email, street, city, state, zip, isAdmin } = props.owner;
    return username ? (
        <div className="container">
            <h3>Owner Information</h3>
            <p>Username: {username}</p>
            <p>Phone: {phone}</p>
            <p>Email: <a href={"mailto:" + email}>{email}</a></p>
            <p>Address:</p>
            <p>{street}</p>
            <p>{city}{state}</p>
            <p>{zip}</p>
        </div>
    ) : null
}

export default AdminUserInformation;