import React from 'react'
import headerimage from '../../images/favicon-32x32.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Link to="/adminhomepage/home">
      <div className='headerdiv d-flex justify-content-center'>
      
        <div>
            <img src={headerimage} />
        </div>
        <div >
            <h3 className='headermsg'>Ink & Papers Admin Portal</h3>
        </div>

      </div>
      </Link>
    </>
  )
}

export default Header
