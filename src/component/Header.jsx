import React, { useState } from 'react'
//import Form from './Form';
//import { IoMenuOutline } from "react-icons/io5"
//import { FaHome } from 'react-icons/fa' 
import { BsMenuButtonWideFill } from "react-icons/bs";
//import Form from './Form';
import {useEffect, useRef} from 'react';
import Nav from './Nav';

//var userIsRegistered = true;

function Header() {
  const [open, setOpen] = useState(false);
  
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };
    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

});


return (
  
      <div className="App">
  <div className='menu-container' ref={menuRef}>
  <header>
  <h1>Header</h1>
  <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
    <button className='menu' ><BsMenuButtonWideFill size={25}  /></button>
    </div>
  <div className={`dropdown ${open? 'active' : 'inactive'}`} >
    <Nav/>
    
  </div>
  </header>
  </div>
</div>
  
)

  
}

export default Header