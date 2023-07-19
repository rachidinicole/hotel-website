import React from 'react';
import './App.css'
import Dozens from "../src/images/dozens.jpg";
import { FaMapPin, FaBed, FaMale, FaCheckSquare, FaCheckDouble,} from "react-icons/fa";

const Home = () => {
  return (
    <div >
      <h1 className='test-font'>COLE ESSENCE</h1>
      <h2 className='nick2'>Hotel for every moment rich in emotion</h2>
      <h3 className='nick3'>Every moment feels like the first time in COLE ESSENCE</h3>
      {""}
      <div>
      <img src={Dozens}id='dozens'/>
      </div>
      <button className='book'>Book now</button>
    
    <div className='navbar2'>
    <nav>
      <a className='hOMEB1'><FaMapPin/>Location </a>
      <a className='hOMEB1'><FaBed/>Room type </a>
      <a className='hOMEB1'><FaMale/>Person </a>
      <a className='hOMEB1'><FaCheckSquare/>check in</a>
      <a className='hOMEB1'><FaCheckDouble/>check out</a>
      <button className='BOOK'>Book now</button>
    </nav>
    </div>
    {/* <p className='zay'>Our facilities</p> */}
    </div>
  );
};

export default Home;
