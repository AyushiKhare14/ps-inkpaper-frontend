import React from 'react'
import { FaSortAlphaDown } from "react-icons/fa";
import { useState } from 'react';

function Authorsearchandfilter({setSearch, setSortAuthor}) {
    let [clickCounter, setClickCounter] = useState(0);
    
    function handleSearch(e){
      setSearch(e.target.value);
    }

    const handleSort = ()=>{
      
      setClickCounter(clickCounter=clickCounter+1) 

      if(clickCounter == 1){
        setSortAuthor(1)
      }
      else if(clickCounter ==2){
        setSortAuthor(2)
      }
      else{
        setClickCounter(0);
        setSortAuthor(0)
      }
      
    }

  return (
    <div className='d-flex justify-content-around mt-2'>
      <div className='flex-fill'>
      <input  type='text' placeholder='Search Author by name or description...' className="form-control" onInput={handleSearch} />
      </div>
      <div className='ms-2 me-2'>
        <FaSortAlphaDown size={25} onClick={handleSort} />    
       </div>

    </div>
   
  )
}

export default Authorsearchandfilter
