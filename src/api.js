import axios from 'axios';
const API = 'https://acme-users-api-rev.herokuapp.com/api';

const fetchUser = async () => {

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


const fetchNotes = async (userId) => {
  return await axios.get(`${API}/users/${userId}/notes`);
}


const fetchVacations = async (userId) => {
  return await axios.get(`${API}/users/${userId}/vacations`);
}


const fetchFollowingCompanies = async (userId) => {
  return await axios.get(`${API}/users/${userId}/followingCompanies`);
}


const fetchCompanies = async () => {
  return await axios.get(`${API}/companies`);
}


const createVacation = async (userId, startDate, endDate) => {
  return await axios.post(`${API}/users/${userId}/vacations`, { startDate: startDate, endDate: endDate });
}


const deleteVacation = async (userId, vacationId) => {
  return await axios.delete(`${API}/users/${userId}/vacations/${vacationId}`)
}


export { fetchUser, fetchNotes, fetchVacations, fetchFollowingCompanies, fetchCompanies, createVacation, deleteVacation };