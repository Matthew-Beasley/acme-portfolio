import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchUser } from './api';
import Header from './Header';



function App() {
  const [user, setUser] = useState({}); //notes, vacations, and followingCompanies
  const [notes, setNotes] = useState([]); // array
  const [vacations, setVacations] = useState([]);
  const [followingCompanies, setFollowingCompanies] = useState([]);

  useEffect(() => {
    fetchUser()
      .then(response => setUser(response))
  }, [])

  
  const changeUser = () => {
    console.log(user.id)
    window.localStorage.removeItem('userId');
    fetchUser()
      .then(response => setUser(response));
  }
  console.log(user)
  

  return (
    <div className="App">
      <Header user={user} changeUser={changeUser}/>
      
    </div>
  );
}

export default App;
