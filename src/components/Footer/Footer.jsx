import React from 'react';
import './Footer.css';
import youtube_icon from '../../image/youtube_icon.png';
import twitter_icon from '../../image/twitter_icon.png';
import instagram_icon from '../../image/instagram_icon.png';
import facebook_icon from '../../image/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} className="youtube-icon" alt="" />
        <img src={twitter_icon} className="twitter-icon" alt="" />
        <img src={instagram_icon} className="instagram-icon" alt="" />
        <img src={facebook_icon} className="facebook-icon" alt="" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Gift cards</li>
        <li>Media center</li>
        <li>Investor relations</li>
        <li>Jops</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal notices</li>
        <li>Cookie preferences</li>
        <li>Corporate information</li>
        <li>Contact us</li>
      </ul>

      <p className='copyright'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer