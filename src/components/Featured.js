import React, {useState,useEffect} from 'react';
import './Featured.css';
import BTC from '../assets/githubblack.png';
import axios from 'axios'
import {FiArrowUpRight,FiArrowDown} from 'react-icons/fi'

const Featured = () => {

    const [data, setData] = useState(null)
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
    useEffect(() => {
        axios.get(url).then((response)=>{
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    if(!data) return null;

  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h2>Explore all available crypto's Like Bitcoin, Etherum and Dogecoin</h2>
                <p>See all available assests: Cryptocurrencies and NFTs</p>
                <button className="btn">See more coins</button>
            </div>
            <div className="right">
                <div className="top">
                    <img src={BTC} alt="" />
                </div>
                <div>
                    <h5>Bitcoin</h5>
                    <p>$12,0000</p> 
                    <span><FiArrowUpRight /> 2.5% </span>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Featured;
