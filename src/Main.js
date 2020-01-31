import React from 'react';

const Main = ({ notes, vacations, followingCompanies }) => {
  return (
    <div className="container">
      <div className="circles">
        <h3><a href="#view=notes">Notes</a></h3>
        <p>You have {notes.length} Notes</p>
      </div>
      <div className="circles">
        <h3><a href="#view=vacations">Vacations</a></h3>
        <p>You have {vacations.length} Vacations</p>
      </div>
      <div className="circles">
        <h3><a href="#view=followed">Followed Companies</a></h3>
        <p>You are following {followingCompanies.length} Companies</p>
      </div>
    </div>
  )
}

export default Main;