import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchUser, fetchNotes, fetchVacations, fetchFollowingCompanies } from './api';
import Header from './Header';



function App() {
  const [user, setUser] = useState({}); //notes, vacations, and followingCompanies
  const [notes, setNotes] = useState([]); // array
  const [vacations, setVacations] = useState([]);
  const [followingCompanies, setFollowingCompanies] = useState([]);


  const fetchData = () => {
    fetchUser()
    .then(response => setUser(response))
    //.then(user => console.log(user.id))
  }


  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  const changeUser = () => {
    window.localStorage.removeItem('userId');
    fetchData();
  }
  //console.log(user)
  

  return (
    <div className="App">
      <Header user={user} changeUser={changeUser}/>
      
    </div>
  );
}

export default App;
