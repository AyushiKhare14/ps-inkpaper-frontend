import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useLocation } from 'react-router-dom';

function Genresidebar() {
    let location = useLocation();
  return (
    <>
    <Link className='sidebarlink' to="genres">
    <div className='d-flex flex-column genrediv justify-content-center align-items-center'>
    <div>{location.pathname.includes("genres") ? <BiSolidDownArrow color='black'/> : "" }</div>

        <div>G</div>
        <div>E</div>
        <div>N</div>
        <div>R</div>
        <div>E</div>
        <div>S</div>
        <div>{location.pathname.includes("genres") ? <BiSolidUpArrow color='black'/> : "" }</div>

    </div>
    </Link>
</>
  )
}

export default Genresidebar
