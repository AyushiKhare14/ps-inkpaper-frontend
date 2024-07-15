import React from 'react'
import adminlogo from '../../images/adminlogo.png'
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';




function Leftsidebar() {
    
    const d = new Date();
    let day = d.getDate();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthinwords = month[d.getMonth()];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekdayinwords = weekday[d.getDay()];

    let todayDate = `${monthinwords} ${day}, ${weekdayinwords}`;

  return (
    
        <div className='leftsidebars d-flex flex-column align-items-center h-100'>
            
            <div className='pt-5 pb-2'>
                <Link to="/adminhomepage/home">
             <img src={adminlogo} className='img-fluid'/>
                </Link>
            </div>

            <div className='text-center'>
                <h5>Welcome Admin!</h5>
                <small>{todayDate}</small>
                <hr></hr>
                <div className='welcomemsg'>
                <p>The "Ink & Papers" is a small online book store.</p>
                <p>As admin your responsibility is to maintain our store by managing the registered books, their authors and genres.</p>
                <p>For any technical issues with portal, please reach out to our technical team on call or by mail.</p>
                <p><IoMdCall color='white'/>1800 220 2020</p>
                <p><CiMail /> support@inkandpapers.com</p>
                </div>

                {sessionStorage.getItem("loggedIn") === "true" 
                ?<Link to="/"><button className='logoutbtn' onClick={()=>sessionStorage.clear()}>Logout</button></Link>

                :<Link to="/"><button className='logoutbtn' >Login</button></Link>}
            </div>


        </div>
        
    
  )
}

export default Leftsidebar
