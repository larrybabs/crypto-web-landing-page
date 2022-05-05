import React from 'react';
import './Hero.css';
import Crypto from '../assets/crypto.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="left">
                <p>Buy & sell crypto 24/7 using your bank account</p>
                <h1> Invest in cryptocurrency today</h1>
                <p>Buy,Sell, & store cryptocurrencies</p>
                <div className="input-container">
                    <input type="email" placeholder="Enter your email" />
                    <button className="btn">Learn more</button>
                </div>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={Crypto} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Hero;
