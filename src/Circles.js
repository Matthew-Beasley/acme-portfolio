import React from 'react';
import { Link } from 'react-router-dom';

const Circles = ({ notes, vacations, followingCompanies }) => {
  return (
    <div className="container">
      <div className="circles">
        <h3><Link to="/notes">Notes</Link></h3>
        <p>You have {notes.length} Notes</p>
      </div>
      <div className="circles">
        <h3><Link to="/vacations">Vacations</Link></h3>
        <p>You have {vacations.length} Vacations</p>
      </div>
      <div className="circles">
        <h3><Link to="/following">Followed Companies</Link></h3>
        <p>You are following {followingCompanies.length} Companies</p>
      </div>
    </div>
  )
}

export default Circles;