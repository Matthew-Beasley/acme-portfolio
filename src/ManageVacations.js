import React, { useState, useEffect } from 'react';
import { postVacation, deleteVacation } from './api';

const ManageVacations = ({ vacations }) => {
  return (
    <div className="form-container">
      <form onSubmit={ev => ev.preventDefault()}>
        <div className="date-inputs">

        </div>
      </form>
    </div>
  )
}

export default ManageVacations;