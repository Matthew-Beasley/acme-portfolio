import React from 'react';
import moment from 'moment';

const Vacations = ({ vacations }) => {
  
  const diffDates = (startDate, endDate) => {
    var a = moment(endDate);
    var b = moment(startDate);
    return a.diff(b, 'days');
  }


  return (
    <div className="vacations">
      <h2>Vacations</h2>
      <ul>
        {vacations.map((vacation, idx) => {
          return <li>
            <p>{moment(vacation.startDate).format('MM/DD/YYYY')} to {moment(vacation.endDate).format('MM/DD/YYYY')}</p>
            <p>Duration is {diffDates(vacation.startDate, vacation.endDate)} days</p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Vacations;