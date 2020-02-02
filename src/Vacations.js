import React, { useState } from 'react';
import { createVacation, deleteVacation } from './api';
import moment from 'moment';

const Vacations = ({ vacations, setVacations, user }) => {
  const [start, setStart] = useState(moment().format('YYYY-MM-DD'));
  const [end, setEnd] = useState(moment().add(7, 'days')); //why is this gettin over written?
  
  const diffDates = (startDate, endDate) => {
    var a = moment(endDate);
    var b = moment(startDate);
    return a.diff(b, 'days');
  }


  const setStartTime = ({ target }) => {
    setStart(moment(target.value).format('YYYY-MM-DD'))
  }


  const setEndTime = ({ target }) => {
    setEnd(moment(target.value).format('YYYY-MM-DD'))
  }


  const makeVacation = () => {
    createVacation(user.id, moment(start).format('YYYY-MM-DD'), moment(end).format('YYYY-MM-DD'))
      .then(response => setVacations([...vacations, response.data]));
  }


  const removeVacation = async (vacation) => {
    await deleteVacation(user.id, vacation.id)
    const updated = vacations.filter(item => {
      return item.id !== vacation.id;
    })
    setVacations(updated);
  }


  return (
    <div className="vacations">
      <h2>Vacations</h2>
      <ul>
        {vacations.map((vacation, idx) => {
          return <li key={idx}>
            <p>{moment(vacation.startDate).format('MM/DD/YYYY')} to {moment(vacation.endDate).format('MM/DD/YYYY')}</p>
            <p>Duration is {diffDates(vacation.startDate, vacation.endDate)} days</p>
            <button onClick={() => removeVacation(vacation)}>Delete</button>
          </li>
        })}
      </ul>
      <form onSubmit={ev => ev.preventDefault()}>
        <div className="dates">
          <input type="date" value={moment(start).format('YYYY-MM-DD')} onChange={ev => setStartTime(ev)}></input>
          <input type="date" value={moment(end).format('YYYY-MM-DD')} onChange={ev => setEndTime(ev)}></input>
          <button onClick={() => makeVacation()}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Vacations;