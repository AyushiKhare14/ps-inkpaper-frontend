import React, { useState } from 'react'
import Bookheader from '../components/books/Bookheader'
import Bookform from '../components/books/Bookform'
import BookList from '../components/books/BookList'
import Booksearchandfilters from '../components/books/Booksearchandfilters'


function Books() {
  let [bookAddStatus, setBookAddStatus] = useState("")
  let [search, setSearch] = useState("")
  let [sortPublishedDate, setSortPublishedDate] = useState(0);
  let [sortBook, setSortBook] = useState(0);
  let [sortPrice, setSortPrice] = useState(0);

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
        <div className=''>
          <Booksearchandfilters 
          setSearch={setSearch} 
          setSortPublishedDate={setSortPublishedDate} 
          setSortBook={setSortBook} 
          setSortPrice={setSortPrice}/>
        </div>
        {/* authorAddStatus={authorAddStatus} search={search} sortAuthor={sortAuthor} */}
        {/* <div className='divider mt-2'></div> */}
        {/* <hr></hr> */}
        <div>
          <BookList 
          bookAddStatus={bookAddStatus} 
          search={search} 
          sortBook={sortBook} 
          sortPrice={sortPrice} 
          sortPublishedDate={sortPublishedDate}/>
        </div> 

      </div>
    </>
  )
}

export default Books
