import React from 'react';
import './Start.css'
import Mobile from '../assets/mobile.png'

const Start = () => {
  return (
    <div className="start">
        <div className="container">
            <div className="left">
                <img src={Mobile} alt="" />
            </div>
            <div className="right">
                <h2>Earn passive income with crypto</h2>
                <p>Earn up to 14% annuall rewards on 30+ digital assests. Simply hold your assets in the app to automatically earn
                    rewards at the end of each month with no lock up and no limits.  </p>
                <div className="input-container">
                    <input type="email" placeholder="Enter your email" />
                    <button className="btn">Learn more </button>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Start;
