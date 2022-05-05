import React, {useState} from 'react';
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav); 
     
  return (
    <div className="header">
        <div className="container">
            <h1>Crypt<span className="primary">Meta</span></h1>
            <ul className={nav ? "nav-menu active" : "nav-menu"}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Featured</a>
                </li>
                <li>
                    <a href="/">Earn</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
            <div className="btn-group">
                <button className="btn">Connect wallet</button>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {nav? (<FaTimes size={20} color="#333"/> ) : (<FaBars size={20} color="#333"/>)}
                
            </div>
        </div>
      
    </div>
  );
}

export default Navbar;
