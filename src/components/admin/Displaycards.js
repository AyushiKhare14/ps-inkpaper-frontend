import React from 'react'
import { ImBooks } from "react-icons/im";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

function Displaycards() {
    const location = useLocation()
  return (
    <div className='d-flex justify-content-center bg-dark'>
    <ul className="nav nav-tabs bg-dark flex-fill">
        
        <div>
        <li className="nav-item">
            <Link className={`nav-link ${location.pathname.includes("genres") ?"active" : "text-light"} `} aria-current="page" to="genres">Manage Genres</Link>
        </li>
        </div>
        <div>
        <li className="nav-item">
            <Link className={`nav-link ${location.pathname.includes("authors") ?"active" : "text-light"} `}   to="authors">Manage Authors</Link>
        </li>
        </div>
        <div>
        <li className="nav-item">
            <Link className={`nav-link ${location.pathname.includes("books") ?"active" : "text-light"} `} to="books">Manage Books</Link>
        </li>
        </div>
        <div>
        <li className="nav-item homelink">
            <Link className={`nav-link ${location.pathname.includes("/home") ?"active" : "text-light"} `} to="home">Home</Link>
        </li>
        </div>
        
    </ul>
            
    </div>
  )
}

export default Displaycards



