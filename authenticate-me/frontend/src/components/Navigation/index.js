// frontend/src/components/Navigation/index.js
// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <>
      <NavLink to="/beats">Beats</NavLink>
      <NavLink to="/upload">Upload</NavLink>
      <ProfileButton user={sessionUser} />
    </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
