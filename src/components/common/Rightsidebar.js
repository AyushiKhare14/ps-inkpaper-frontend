import React from 'react'
import Genresidebar from './Genresidebar'
import Authorsidear from './Authorsidear'
import Booksidebar from './Booksidebar'

function Rightsidebar() {
  return (
    <div className='row d-flex  sidears'>
        <div className='col-sm-4'>
            <Genresidebar />
        </div>
        
        <div className=' col-sm-4'>
            <Authorsidear />
        </div>
        
        <div className=' col-sm-4'>
            <Booksidebar />
        </div>
    </div>
  )
}

export default Rightsidebar
