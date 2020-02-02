import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { fetchUser, fetchNotes, fetchVacations, fetchFollowingCompanies } from './api';
import Header from './Header';
import Circles from './Circles';
import Notes from './Notes';
import Vacations from './Vacations';
import Following from './Following';


function App() {
  const getHash = () => {
    return qs.parse(window.location.hash.slice(1))
  }

  const [user, setUser] = useState({}); 
  const [notes, setNotes] = useState([]);
  const [vacations, setVacations] = useState([]);
  const [followingCompanies, setFollowingCompanies] = useState([]);
  const [params, setParams] = useState(qs.parse(getHash()));


  const changeUser = () => {
    window.localStorage.removeItem('userId');
    fetchUser()
      .then(user => setUser(user));
  }


  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
      {(!params.view || params.view === '') && <Circles params={params} notes={notes} vacations={vacations} followingCompanies={followingCompanies} />}
      {params.view === 'notes' && <Notes notes={notes} />}
      {params.view === 'vacations' && <Vacations vacations={vacations} setVacations={setVacations} user={user} />} 
      {params.view === 'following' && <Following followingCompanies={followingCompanies} />}
    </div>
  );
}

export default App;
