import React from 'react'
import Bookheader from '../components/books/Bookheader'
import Bookform from '../components/books/Bookform'


function Books() {
  return (
    <>
      <div className='genres d-flex flex-column'>
        <div>
          <Bookheader />
        </div>
        <div className='mt-2'>
          <Bookform />
        </div>
        <div className='divider mt-2'></div>
        {/* <div className=''>
          <Authorsearchandfilter setSearch={setSearch} setSortAuthor={setSortAuthor}/>
        </div>
        <div className='divider mt-2'></div>
        <hr></hr>
        <div>
          <AuthorList authorAddStatus={authorAddStatus} search={search} sortAuthor={sortAuthor}/>
        </div> */}

      </div>
    </>
  )
}

export default Books
