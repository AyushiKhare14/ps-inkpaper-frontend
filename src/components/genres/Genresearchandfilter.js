import React from 'react'
import { FaSortAlphaDown } from "react-icons/fa";

function Genresearchandfilter({setSearch}) {

    function handleSearch(e){
      setSearch(e.target.value);
    }

  return (
    <div className='d-flex justify-content-around mt-2'>
      <div className='flex-fill'>
      <input  type='text' placeholder='Search Genre...' className="form-control" onInput={handleSearch} />
      </div>
      <div className='ms-2 me-2'>
        <FaSortAlphaDown size={25}/>    
       </div>

    </div>
   
  )
}

export default Genresearchandfilter
