import React, {useState, useEffect} from 'react'

import { ImSortAlphaDesc } from "react-icons/im";
import { HiSortDescending } from "react-icons/hi";
import { FcClearFilters } from "react-icons/fc";

import { ImSortAlphaAsc } from "react-icons/im";
import { BsSortDownAlt } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Booksearchandfilters(props) {
  let [bookSortCounter, setBookSortCounter] = useState(0);
  let [priceSortCounter, setPriceSortCounter] = useState(0);
  let [pdateSortCounter, setPdateSortCounter] = useState(0);
  
  let [searchStr, setSearchStr] = useState("")
  const [gdata, setGdata] = useState([]);
  const [adata, setAdata] = useState([]);
  const [authorId, setAuthorId] = useState("");
  const [genreId, setGenreId] = useState(""); 

  const handleClearFilters =()=>{
    props.setFilterByAuthor(null);
    props.setFilterByGenre(null);
    props.setSearch("");
  }

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
    //setSearchStr(e.target.value)
    props.setSearch(e.target.value);
  }

  const handleBookSort = ()=>{
      
    setBookSortCounter(bookSortCounter=bookSortCounter+1) 

    if(bookSortCounter == 1){
      props.setSortBook(1)
    }
    else if(bookSortCounter ==2){
      props.setSortBook(2)
    }
    else{
      setBookSortCounter(0);
      props.setSortBook(0)
    }
    
  }

  const handlePriceSort =()=>{
    setPriceSortCounter(priceSortCounter=priceSortCounter+1) 

    if(priceSortCounter == 1){
      props.setSortPrice(1)
    }
    else if(priceSortCounter ==2){
      props.setSortPrice(2)
    }
    else{
      setPriceSortCounter(0);
      props.setSortPrice(0)
    }
  }

  const handleDateSort = ()=>{
    setPdateSortCounter(pdateSortCounter=pdateSortCounter+1) 

    if(pdateSortCounter == 1){
      props.setSortPublishedDate(1)
    }
    else if(pdateSortCounter ==2){
      props.setSortPublishedDate(2)
    }
    else{
      setPdateSortCounter(0);
      props.setSortPublishedDate(0)
    }
 }


  return (
    <div>
      <div className='d-flex justify-content-around mt-2 '>
        <div className='flex-fill p-1'>
        {/* <input  type='text' placeholder='Search Book...' className="form-control" onInput={handleSearch} /> */}
        <TextField 
        onInput={handleSearch} 
        label="Search by book title..." 
        //value={searchStr}
        //onChange={handleSearch}
        sx={{ width: '100%',
          '& .MuiInputBase-root': {
              height: '38px', // Adjust input height as needed
             
          },}}/>
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
                                          props.setFilterByAuthor(newValue ? newValue.author_id : null);
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
                                            props.setFilterByGenre(newValue ? newValue.genre_id : null);
                                        }}
                                        renderInput={(params) => <TextField  {...params} label="Filter by Genre" />}
                                    />

        </div>
        <div>
        <FcClearFilters size={35} color='black' className='pt-1' onClick={handleClearFilters}/>

        </div>

    </div>

      <div className='row mt-2 mb-2 booklistheader'>
        
        <div className='col-sm-1'>
        
        </div>

        <div className='col-sm-2'>
        Title  {bookSortCounter == 0 ? 
        <ImSortAlphaAsc  color='white' size={15} onClick={handleBookSort}/> : 
        (bookSortCounter==1 ? <ImSortAlphaDesc color='white' size={15} onClick={handleBookSort}/> : <HiSortDescending color='white' size={15} onClick={handleBookSort} />)}

        </div>
        

        <div className='col-sm-1'>
        ₹  {priceSortCounter == 0 ? 
        <BsSortDownAlt  color='white' size={18} onClick={handlePriceSort}/> : 
        (priceSortCounter==1 ? <BsSortDown color='white' size={18} onClick={handlePriceSort}/> : <HiSortDescending color='white' size={15} onClick={handlePriceSort} />)}

        </div>

        <div className='col-sm-2'>
        Released On  
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
