import React from 'react'
import { FaSortAlphaDown } from "react-icons/fa";
import { useState } from 'react';

function Genresearchandfilter({setSearch, setSortGenre}) {
  let [clickCounter, setClickCounter] = useState(0);
    function handleSearch(e){
      setSearch(e.target.value);
    }

    const handleSort = ()=>{
      console.log("inside")
      setClickCounter(clickCounter=clickCounter+1)  
      if(clickCounter == 1){
        setSortGenre(1)
      }
      else if(clickCounter ==2){
        setSortGenre(2)
      }
      else{
        setClickCounter(0);
        setSortGenre(0)
      }
      //console.log("click" + clickCounter)
    }

  return (
    <div className='d-flex justify-content-around mt-2'>
      <div className='flex-fill'>
      <input  type='text' placeholder='Search Genre...' className="form-control" onInput={handleSearch} />
      </div>
      <div className='ms-2 me-2'>
        <FaSortAlphaDown size={25} onClick={handleSort} />    
       </div>

    </div>
   
  )
}

export default Genresearchandfilter
