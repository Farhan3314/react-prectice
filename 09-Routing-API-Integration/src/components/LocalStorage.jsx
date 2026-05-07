import React, { useEffect } from 'react';

const LocalStorage = () => {

    useEffect(() => {
        const user = {
            username: 'Farhan',
            age: 24,
            city: 'Gujranwala'
        };

        window.localStorage.setItem('user', JSON.stringify(user));

        const users = JSON.parse(window.localStorage.getItem('user'));

        console.log(users);
    }, []);

    return (
        <div>
            <h1>Local Storage</h1>
            <p>Check in Console and Application / Storage</p>
        </div>
    );
};

export default LocalStorage;