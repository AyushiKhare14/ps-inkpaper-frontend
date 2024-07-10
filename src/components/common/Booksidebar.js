import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useLocation } from 'react-router-dom';

function Booksidebar() {
    let location = useLocation();
  return (
    <>
    <Link className='sidebarlink' to="books">
    
 
    <div className='d-flex flex-column booksdiv justify-content-center align-items-center'>
    <div>{location.pathname.includes("books") ? <BiSolidDownArrow color='black'/> : "" }</div>

    <div>B</div>
    <div>O</div>
    <div>O</div>
    <div>K</div>
    <div>S</div>
    <div>{location.pathname.includes("books") ? <BiSolidUpArrow color='black'/> : "" }</div>
</div>
</Link>
</>
  )
}

export default Booksidebar
