import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navigation.module.css"
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className='nav'>
       
        <li className='home'><NavLink to="/">Home</NavLink></li>
        <li className='Explore'><NavLink to="/explore">Explore</NavLink></li>
        <li className='Rooms'><NavLink to="/rooms">Rooms</NavLink></li>
        <li className='About'><NavLink to="/about">About</NavLink></li>
        <li className='Contact'><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <button className='Booknow'>Book now</button>
    </nav>
  );
};

export default Navigation;
