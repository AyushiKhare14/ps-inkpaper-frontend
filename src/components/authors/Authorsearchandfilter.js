import React from 'react'
import { FaSortAlphaDown } from "react-icons/fa";
import { useState } from 'react';
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FcAlphabeticalSortingZa } from "react-icons/fc";
import { MdOutlineInsertChartOutlined } from "react-icons/md";

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
      {clickCounter == 0 ? <FcAlphabeticalSortingAz size={25} onClick={handleSort}/> : (clickCounter==1 ? <FcAlphabeticalSortingZa size={25} onClick={handleSort}/> : <MdOutlineInsertChartOutlined size={25} onClick={handleSort} color='grey'/>)}
      </div>

    </div>
   
  )
}

export default Authorsearchandfilter
