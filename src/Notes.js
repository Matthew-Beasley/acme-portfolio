import React from 'react';

const Notes = ({notes}) => {
  return (
    <div className="notes" >
      <h3>Notes</h3>
      <ul>
        {notes.map((note, idx) => {
          return <li key={idx}>{note.text}</li>
        })}
      </ul>
    </div>
  )
}

export default Notes;