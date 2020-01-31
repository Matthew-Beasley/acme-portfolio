import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchUser, fetchNotes, fetchVacations, fetchFollowingCompanies } from './api';
import Header from './Header';



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
        .then(([_notes, _vacations, _followingCompanies]) => {
          setNotes(_notes.data);
          setVacations(_vacations.data);
          setFollowingCompanies(_followingCompanies.data);
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

      <main>
        <div>{notes.length} Notes</div>
        <div>{vacations.length} Vacations</div>
        <div>Following {followingCompanies.length} Companies</div>
      </main>
      
    </div>
  );
}

export default App;
