import React, { useState } from 'react'
//import Form from './Form';
//import { IoMenuOutline } from "react-icons/io5"
//import { FaHome } from 'react-icons/fa' 
import { BsMenuButtonWideFill } from "react-icons/bs";
import Form from './Form';

//var userIsRegistered = true;

function Header() {
 const [count, setCount] = useState(0);

 function handleIncrease() {
    setCount(count + 1);
 }

 function increase(){
    console.log("i got clicked");
    handleIncrease();
 } 

 return (
    <header>
      <h1> Keeper</h1>
      <div id="main-navbar" className="navbar">
      <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ display: "flex" }}>
        <button className='menu ' onClick={increase}>
        <BsMenuButtonWideFill size={25}  />
        </button>
      </div>
    </header>
 )
}

export default Header