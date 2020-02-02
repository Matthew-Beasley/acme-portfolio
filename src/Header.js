import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, changeUser }) => {
  return (
    <header>
      <Link to="/circles" ><img src={user.avatar} alt="" /></Link>
      <h2>Welcome {user.fullName}</h2>
      <button onClick={() => changeUser()}>Change User</button>
    </header>
  )
}
export default Header;