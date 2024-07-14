import React, {useState, useEffect} from 'react'
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FcAlphabeticalSortingZa } from "react-icons/fc";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { ImSortAlphaDesc } from "react-icons/im";
import { HiSortDescending } from "react-icons/hi";
import { HiOutlineSortDescending } from "react-icons/hi";
import { ImSortAlphaAsc } from "react-icons/im";
import { BsSortDownAlt } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Booksearchandfilters(props) {
  let [clickCounter, setClickCounter] = useState(0);

  const [gdata, setGdata] = useState([]);
  const [adata, setAdata] = useState([]);
  const [authorId, setAuthorId] = useState("");
  const [genreId, setGenreId] = useState(""); 

  useEffect(() => {
    getAllGenres();
    getAllAuthors();
}, []);

const getAllGenres = async () => {
    try {
        const responseData = await fetch("http://localhost:3000/api/genre");
        setGdata(await responseData.json())
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
};


const getAllAuthors = async () => {
    try {
        const responseData = await fetch("http://localhost:3000/api/author");
        setAdata(await responseData.json())
        
    } catch (error) {
        console.error('Error fetching authors:', error);
    }
};

  function handleSearch(e){
    props.setSearch(e.target.value);
  }

  const handleSort = ()=>{
      
    setClickCounter(clickCounter=clickCounter+1) 

    if(clickCounter == 1){
      props.setSortAuthor(1)
    }
    else if(clickCounter ==2){
      props.setSortAuthor(2)
    }
    else{
      setClickCounter(0);
      props.setSortAuthor(0)
    }
    
  }

  return (
    <div>
      <div className='d-flex justify-content-around mt-2 '>
        <div className='flex-fill p-1'>
        <input  type='text' placeholder='Search Book...' className="form-control" onInput={handleSearch} />
        </div>
      
        <div className='p-1'>
        <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={adata}
                                        getOptionLabel={(option) => option.name}
                                        sx={{ width: '225px',
                                            '& .MuiInputBase-root': {
                                                height: '38px', // Adjust input height as needed
                                               
                                            },}}
                                        value={adata.find((option) => option.author_id === authorId) || null}
                                        onChange={(event, newValue) => {
                                            setAuthorId(newValue ? newValue.author_id : null);
                                        }}
                                        renderInput={(params) => <TextField  {...params} label="Filter by Author" />}
                                    />
        </div>

        <div className='p-1'>
        <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={gdata}
                                        getOptionLabel={(option) => option.genre_name}
                                        sx={{ width: '225px',
                                            '& .MuiInputBase-root': {
                                                height: '38px', // Adjust input height as needed
                                               
                                            },}}
                                        value={gdata.find((option) => option.genre_id === genreId) || null}
                                        onChange={(event, newValue) => {
                                            setGenreId(newValue ? newValue.genre_id : null);
                                        }}
                                        renderInput={(params) => <TextField  {...params} label="Filter by Genre" />}
                                    />

        </div>

    </div>

      <div className='row mt-2 mb-2 booklistheader'>
        
        <div className='col-sm-1'>
        
        </div>

        <div className='col-sm-2'>
        Title  {clickCounter == 0 ? 
        <ImSortAlphaAsc  color='white' size={15} onClick={handleSort}/> : 
        (clickCounter==1 ? <ImSortAlphaDesc color='white' size={15} onClick={handleSort}/> : <HiSortDescending color='white' size={15} onClick={handleSort} />)}

        </div>
        

        <div className='col-sm-1'>
        ₹  {clickCounter == 0 ? 
        <BsSortDownAlt  color='white' size={18} onClick={handleSort}/> : 
        (clickCounter==1 ? <BsSortDown color='white' size={18} onClick={handleSort}/> : <HiSortDescending color='white' size={15} onClick={handleSort} />)}

        </div>

        <div className='col-sm-2'>
        Released On  {clickCounter == 0 ? 
        <TiArrowUnsorted  color='white' size={15} onClick={handleSort}/> : 
        (clickCounter==1 ? <TiArrowUnsorted  color='white' size={15} onClick={handleSort}/> : <HiSortDescending color='white' size={15} onClick={handleSort} />)}

        </div>

        <div className='col-sm-2'>
            Author
        </div>

        <div className='col-sm-2'>
            Genre
        </div>

        <div className='col-sm-1'>
            
        </div>
        <div className='col-sm-1'>
           
            
        </div>
    </div>
  
   
      
    </div>
  )
}

export default Booksearchandfilters
