import React from 'react'
import Sideimage from '../components/admin/Sideimage'
import Loginform from '../components/admin/Loginform'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function Adminlogin() {
  return (
    <>
    <div>
        <Header />
    </div>
    <div className='d-flex'>
        <div className='d-flex col-6 justify-content-center align-items-center '>
            <div className="sideimage">
                <Sideimage />
            </div>
           
        </div>
        <div className='d-flex  col-6 align-items-center'>
            <Loginform />
        </div>

        

    </div>
    <div>
        <Footer />
    </div>
      
    </>
  )
}

export default Adminlogin
