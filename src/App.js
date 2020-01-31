import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchUser, fetchNotes, fetchVacations, fetchFollowingCompanies } from './api';
import Header from './Header';
import Main from './Main';


function App() {
  const [user, setUser] = useState({}); //notes, vacations, and followingCompanies
  const [notes, setNotes] = useState([]); // array
  const [vacations, setVacations] = useState([]);
  const [followingCompanies, setFollowingCompanies] = useState([]);


  useEffect(() => {
    fetchUser()
      .then(user => setUser(user));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    if (user.id) {
      Promise.all([fetchNotes(user.id),
      fetchVacations(user.id),
      fetchFollowingCompanies(user.id)])
        .then(([pnotes, pvacations, pfollowingCompanies]) => {
          setNotes(pnotes.data);
          setVacations(pvacations.data);
          setFollowingCompanies(pfollowingCompanies.data);
        })
    }
  }, [user.id])

  
  const changeUser = () => {
    window.localStorage.removeItem('userId');
    fetchUser()
      .then(user => setUser(user));
  }


  return (
    <div className="App">
      <Header user={user} changeUser={changeUser} />
      <Main notes={notes} vacations={vacations} followingCompanies={followingCompanies} />
    </div>
  );
}

export default App;
