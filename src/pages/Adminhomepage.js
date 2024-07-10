import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Genresidebar from '../components/common/Genresidebar'
import Authorsidear from '../components/common/Authorsidear'
import Booksidebar from '../components/common/Booksidebar'
import Leftsidebar from '../components/common/Leftsidebar'
import { Outlet } from 'react-router-dom'
import Displaycards from '../components/admin/Displaycards'
import { useLocation } from 'react-router-dom';


function Adminhomepage() {
    let location = useLocation();
    // console.log(location.pathname)
  return (
    <>
        <div>
            <Header />
        </div>

        <div className='d-flex justify-content-around row'>
            {/* Left side bar */}
            <div className=''>
                <Leftsidebar />
            </div>

            {/* Middle section that will change. */}
            <div className='col-sm-8 mt-4'>
                <Displaycards/>
                <div className='m-4'>
                    <Outlet/>
                </div>
            </div>

            {/* Right side bars */}
            <div className='d-flex sidears'>
                <div>
                    <Genresidebar />
                </div>
                
                <div>
                    <Authorsidear />
                </div>
                
                <div>
                    <Booksidebar />
                </div>

            </div>
        </div>


        <div>
            <Footer />
        </div>
    </>
  )
}

export default Adminhomepage
