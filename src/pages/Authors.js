import React from 'react'
import { useState } from 'react';
import Authorheader from '../components/authors/Authorheader'
import Authorform from '../components/authors/Authorform'
import Authorsearchandfilter from '../components/authors/Authorsearchandfilter';
import AuthorList from '../components/authors/AuthorList';


function Authors() {
  let [search, setSearch] = useState("");
  let [authorAddStatus, setAuthorAddStatus] = useState("");
  let [sortAuthor, setSortAuthor] = useState(0);

  return (
    <>
      <div className='genres d-flex flex-column'>
        <div>
          <Authorheader />
        </div>
        <div className='mt-2'>
          <Authorform setAuthorAddStatus={setAuthorAddStatus}/>
        </div>
        <div className='divider mt-2'></div>
        <div className=''>
          <Authorsearchandfilter setSearch={setSearch} setSortAuthor={setSortAuthor}/>
        </div>
        <div className='divider mt-2'></div>
        <hr></hr>
        <div>
          <AuthorList authorAddStatus={authorAddStatus} search={search} sortAuthor={sortAuthor}/>
        </div>

      </div>
    </>
  )
}

export default Authors
