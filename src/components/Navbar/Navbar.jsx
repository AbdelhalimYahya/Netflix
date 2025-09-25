import React from 'react';
import './Navbar.css';
import logo from '../../image/logo.png';
import search_icon from '../../image/search_icon.svg';
import bell_icon from '../../image/bell_icon.svg';
import profile_img from '../../image/profile_img.png';
import caret_icon from '../../image/caret_icon.svg';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="netflix" />

        <ul>
          <li>Home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />

        <div className='navbar-profile'>
        <img src={profile_img} alt="" className='profile' />
        <img src={caret_icon} alt="" />

        <div className='dropdown'>
          <p>Profile</p>
          <p>Settings & Privacy</p>
          <p>Help Center</p>
          <p>Sign out</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar