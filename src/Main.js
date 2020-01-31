import React from 'react';

const Main = ({ notes, vacations, followingCompanies }) => {
  return (
    <div className="container">
      <div className="circles">
        <h3>Notes</h3>
        <p>You have {notes.length} Notes</p>
      </div>
      <div className="circles">
        <h3>Vacations</h3>
        <p>You have {vacations.length} Vacations</p>
      </div>
      <div className="circles">
        <h3>Followed Companies</h3>
        <p>You are following {followingCompanies.length} Companies</p>
      </div>
    </div>
  )
}

export default Main;