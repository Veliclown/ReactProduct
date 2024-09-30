import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>Інформація про користувача</h2>
            <p>Ім'я: {user.name}</p>
            <p>Вік: {user.age}</p>
        </div>
    );
};

export default UserProfile;