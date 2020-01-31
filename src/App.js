import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';



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



function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser()
      .then(response => setUser(response))
  },[])
console.log(user)
  return (
    <div className="App">
      <header>
        <img src={user.avatar} alt=""/>
      </header>
      
    </div>
  );
}

export default App;
