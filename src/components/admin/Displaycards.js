import React from 'react'
import { ImBooks } from "react-icons/im";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";

function Displaycards() {
  return (
    <div>

        <div className="row justify-content-around">
            {/* <div className="col-sm-1 d-flex justify-content-center align-items-center">
                <Link to="/adminhomepage/home"><IoHomeSharp color='black' size={30}/></Link>
            </div> */}
        <div className="col-sm-3">
            <div className="card text-center">
            <div className="card-body">
                {/* <h5 className="card-title">Special title treatment</h5> */}
                <p className="card-text"><MdCategory /> 25 &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="genres" className="btn btn-warning">Manage Genres</Link>
                </p>
            </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card text-center">
            <div className="card-body">
                {/* <h5 className="card-title">Special title treatment</h5> */}
                <p className="card-text"><BsFillPersonLinesFill /> 55&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="authors" className="btn btn-warning">Manage Authors</Link>
                </p>
            </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card text-center">
            <div className="card-body">
                {/* <h5 className="card-title">Special title treatment</h5> */}
                <p className="card-text"><ImBooks /> 430&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="books" className="btn btn-warning">Manage Books</Link>
                </p>
            </div>
            </div>
        </div>
        </div>
            
    </div>
  )
}

export default Displaycards
