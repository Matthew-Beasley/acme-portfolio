import React from 'react';
import axios from 'axios';


const fetchUser = async () => {
    const API = 'https://acme-users-api-rev.herokuapp.com/api';
    const storage = window.localStorage;
    const userId = storage.getItem('userId');
    if (userId) {
        try {
            return (await axios.get(`${API}/users/detail/${userId}`)).data;
        }
        catch (ex) {
            storage.removeItem('userId');
            return fetchUser();
        }
    }
    const user = (await axios.get(`${API}/users/random`)).data;
    storage.setItem('userId', user.id);
    return user;
};

export { fetchUser };