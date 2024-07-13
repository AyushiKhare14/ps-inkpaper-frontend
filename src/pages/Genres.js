import React from 'react'
import Genreheader from '../components/genres/Genreheader'
import Genreform from '../components/genres/Genreform'
import Genresearchandfilter from '../components/genres/Genresearchandfilter'
import GenreList from '../components/genres/GenreList'
import { useState } from 'react'


function Genres() {
  let [search, setSearch] = useState("");
  let [genreAddStatus, setGenreAddStatus] = useState("");
  let [sortGenre, setSortGenre] = useState(0);

  return (
    <>
      <div className='genres d-flex flex-column'>
        <div>
          <Genreheader />
        </div>
        <div className='mt-2'>
          <Genreform setGenreAddStatus={setGenreAddStatus}/>
        </div>
        <div className='divider mt-2'></div>
        <div className=''>
          <Genresearchandfilter setSearch={setSearch} setSortGenre={setSortGenre}/>
        </div>
        <div className='divider mt-2'></div>
        <hr></hr>
        <div>
          <GenreList genreAddStatus={genreAddStatus} search={search} sortGenre={sortGenre}/>
        </div>

      </div>
    </>
  )
}

export default Genres
