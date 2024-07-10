import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useLocation } from 'react-router-dom';

function Authorsidear() {
    let location = useLocation();
  return (
    <>
    <Link className='sidebarlink' to="authors">
    
    <div className='d-flex flex-column authordiv justify-content-center align-items-center'>
        <div>{location.pathname.includes("authors") ? <BiSolidDownArrow color='black'/> : "" }</div>
        <div>A</div>
        <div>U</div>
        <div>T</div>
        <div>H</div>
        <div>O</div>
        <div>R</div>
        <div>S</div>
        <div>{location.pathname.includes("authors") ? <BiSolidUpArrow color='black'/> : "" }</div>
    </div>
    </Link>
    </>
  )
}

export default Authorsidear
