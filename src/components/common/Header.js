import React from 'react'
import headerimage from '../../images/favicon-32x32.png'


function Header() {
  return (
    <>
      
      <div className='headerdiv d-flex justify-content-center'>
      
        <div>
            <img src={headerimage} />
        </div>
        <div >
            <h3 className='headermsg'>Ink & Papers Admin Portal</h3>
        </div>

      </div>
      
    </>
  )
}

export default Header
