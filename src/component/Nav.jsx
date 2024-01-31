import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul>
        <Link to="/notes"><DropdownItem text={"Home"}/></Link>
        <Link to="/about"><DropdownItem text={"About"} /></Link>
        <Link to="/fdbk"><DropdownItem text={"Feedback"}/></Link>
      </ul>
    </div>
  
  )
}

function DropdownItem(props) {
    return(
      <li className='dropdownItem'>
        {props.text}
      </li>
    )
  }
export default Nav