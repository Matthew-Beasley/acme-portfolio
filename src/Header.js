import React from 'react';

const Header = ({user, changeUser}) => {
    return (
        <header>
            <img src={user.avatar} alt="" />
            <h2>Welcome {user.fullName}</h2>
            <button onClick={() => changeUser()}>Change User</button>
        </header>
    )
}
export default Header;