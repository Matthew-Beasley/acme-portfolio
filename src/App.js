import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import qs from 'qs';
import { fetchUser, fetchNotes, fetchVacations, fetchFollowingCompanies } from './api';
import Header from './Header';
import Circles from './Circles';
import Notes from './Notes';
import Vacations from './Vacations';
import Following from './Following';


function App() {
 
  const [user, setUser] = useState({}); 
  const [notes, setNotes] = useState([]);
  const [vacations, setVacations] = useState([]);
  const [followingCompanies, setFollowingCompanies] = useState([]);


  const changeUser = () => {
    window.localStorage.removeItem('userId');
    fetchUser()
      .then(user => setUser(user));
  }

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


  return (
    <div className="App">
      <Header user={user} changeUser={changeUser} />
      <Route path = '/' exact render={() => <Circles notes={notes} vacations={vacations} followingCompanies={followingCompanies}/>} />
      <Route path ='/notes' render={() => <Notes notes={notes} /> }/>
      <Route path = '/vacations' render={() => <Vacations vacations={vacations} setVacations={setVacations} user={user} />} />
      <Route path = '/following' render={() => <Following followingCompanies={followingCompanies} />} />
    </div>
  );
}

export default App;
