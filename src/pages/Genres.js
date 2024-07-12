import React from 'react'
import Genreheader from '../components/genres/Genreheader'
import Genreform from '../components/genres/Genreform'
import Genresearchandfilter from '../components/genres/Genresearchandfilter'
import GenreList from '../components/genres/GenreList'
import { useState } from 'react'


function Genres() {
  let [search, setSearch] = useState("");
  let [genreAddStatus, setGenreAddStatus] = useState("");
  return (
    <>
      <div className='genres d-flex flex-column'>
        <div>
          <Genreheader />
        </div>
        <div className='mt-2'>
          <Genreform setGenreAddStatus={setGenreAddStatus}/>
        </div>
        <div className='divider mt-2'>
          .....
        </div>
        <div className=''>
          <Genresearchandfilter setSearch={setSearch}/>
        </div>
        {/* <hr></hr> */}
        <div>
          <GenreList genreAddStatus={genreAddStatus} search={search}/>
        </div>

      </div>
    </>
  )
}

export default Genres
