import React from 'react';
import './Footer.css'
import { FaTwitter,FaLinkedin,FaFacebook, FaGithub, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
        <div className="col col-1">
            <h1>Coin<span className="primary">Meta</span></h1>
        </div>
        <div className="col">
            <h5>Support</h5>
            <span className="bar"></span>
                <a href="/">Contact Us</a>
                <a href="/">Chat</a>
                <a href="/">Help Center</a>
                <a href="/">FAQ</a>
            
        </div>
        <div className="col">
            <h5>Developers</h5>
            <span className="bar"></span>
                <a href="/">Cloud</a>
                <a href="/">Commerce</a>
                <a href="/">PRO</a>
                <a href="/">Api</a>
        </div>
        <div className="col">
            <h5>Company</h5>
            <span className="bar"></span>
                <a href="/">About</a>
                <a href="/">Information</a>
                <a href="/">Legal</a>
                <a href="/">Privacy</a>
        </div>
        <div className="col">
            <h5>Socials</h5>
            <span className="bar"></span>
                <a href="/"><FaFacebook className="icon"/>Facebook</a>
                <a href="/"><FaTwitter className="icon"/>Twitter</a>
                <a href="/"><FaGithub className="icon"/>GitHub</a>
                <a href="/"><FaLinkedin className="icon"/>LinkedIn</a>
        </div>
        </div>
    </div>
  );
}

export default Footer;
