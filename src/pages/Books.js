import React, { useState } from 'react'
import Bookheader from '../components/books/Bookheader'
import Bookform from '../components/books/Bookform'
import BookList from '../components/books/BookList'


function Books() {
  let [bookAddStatus, setBookAddStatus] = useState("")
  return (
    <>
      <div className='genres d-flex flex-column'>
        <div>
          <Bookheader />
        </div>
        <div className='mt-2'>
          <Bookform setBookAddStatus={setBookAddStatus}/>
        </div>
        <div className='divider mt-2'></div>
        {/* <div className=''>
          <Authorsearchandfilter setSearch={setSearch} setSortAuthor={setSortAuthor}/>
        </div>*/}
        {/* authorAddStatus={authorAddStatus} search={search} sortAuthor={sortAuthor} */}
        <div className='divider mt-2'></div>
        <hr></hr>
        <div>
          <BookList bookAddStatus={bookAddStatus} />
        </div> 

      </div>
    </>
  )
}

export default Books
