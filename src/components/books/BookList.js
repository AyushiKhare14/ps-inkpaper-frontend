import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//import Alert from '@mui/material/Alert';

function BookList(props) {

  let [data, setData] = useState([]);
  let [delStat, setDelStat] = useState(0);
  let [editId, setEditId] = useState(0);
  let [editStat, setEditStat] = useState(false);
  const [gdata, setGdata] = useState([]);
  const [adata, setAdata] = useState([]);


  const [editedTitle, setEditedTitle] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedPublicationDate, setEditedPublicationDate] = useState("");
  const [editedImage, setEditedImage] = useState(null);
  const [editedAuthorId, setEditedAuthorId] = useState("");
  const [editedGenreId, setEditedGenreId] = useState(""); 

  const enableEdit = (id) =>{
    setEditId(editId = id)
    getAllAuthors()
    getAllGenres()
  }

  const  getAllBooks = async ()=> {
    const responseData = await fetch("http://localhost:3000/api/book");
    const books =  await responseData.json();
    setData(data = books);
  }

  const deleteBook = async (id)=>{
    await fetch('http://localhost:3000/api/book/' + id, { method: 'DELETE' });
           setDelStat(Math.random())
  }

  const getAllGenres = async () => {
    try {
        const responseData = await fetch("http://localhost:3000/api/genre");
        //const genres = await responseData.json();
        //setGdata(genres.map((item) => ({ label: item.genre_name, id: item.genre_id })));
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

  // setting up the list
  useEffect(()=>{
    getAllBooks()
  },[props, delStat])


  // Rending Data

  const renderBook = (book) => (
      
    <div className='genretext' key={book.book_id}>
       
    {editId == book.book_id 
      
    ?
    // {setEditedAuthorId(editedAuthorId=book.author_id);
    // setEditedGenreId(editedGenreId=book.genre_id)}
    // <div className='row mt-2 mb-2 d-flex align-items-center text-center'>
    //     <div className='col-sm-1'>
    //       <input type='file'
    //         className='inputfield'
    //         name='image'
    //         onChange={(e)=>setEditedImage(e.target.files[0])} />
    //     </div>
    //     <div className='col-sm-2 '>
    //       <input type='text'
    //         name='title'
    //         className='inputfield'
    //         defaultValue={book.title}
    //         onChange={(e) => setEditedTitle(e.target.value)} />
    //     </div>
    //     <div className='col-sm-1'>
    //     &nbsp; {book.price}
    //     </div>
    //     <div className='col-sm-2'>
    //     &nbsp; {String(book.publication_date).slice(0, 10)}
    //     </div>
    //     <div className='col-sm-2'>
    //         {book.Author.name}
    //     </div>
    //     <div className='col-sm-2'>
    //         {book.Genre.genre_name}
    //     </div>
    //     <div className='col-sm-1'>
    //         <AiFillEdit size={20} onClick={()=>{enableEdit(book.book_id)}} />
    //         {/* onClick={()=>{enableEdit(author.author_id)}} */}
    //     </div>
    //     <div className='col-sm-1'>
    //         <MdDelete size={20} onClick={()=>{deleteBook(book.book_id)}} />
    //         {/* onClick={()=>{deleteAuthor(author.author_id)}} */}
    //     </div>
    // </div>


    ///////////////////////////

    <div className="">
      <div className='d-flex row mb-1'>
          <div className='d-flex col-sm-6'>
              <div className='label col-sm-4'>
                  Book Name &nbsp;&nbsp;
              </div>
              <div className=' col-sm-8'>
                  <input type='text'
                      name='title'
                      className='inputfield'
                      defaultValue={book.title}
                      onChange={(e) => setEditedTitle(e.target.value)} />
              </div>
          </div>
          <div className='d-flex col-sm-6'>
              <div className='label col-sm-4'>
                  Price in INR &nbsp;&nbsp;
              </div>
              <div className='col-sm-8'>
                  <input type='text'
                      name='price'
                      className='inputfield'
                      defaultValue={book.price}
                      onChange={(e) => setEditedPrice(e.target.value)} />
              </div>
          </div>
      </div>
      <div className='d-flex row mb-1'>
          <div className='d-flex col-sm-6'>
              <div className='label col-sm-4'>
                  Publication Date &nbsp;&nbsp;
              </div>
              <div className='col-sm-8'>
                  <input type='date'
                      className='inputfield'
                      name='publication_date'
                      defaultValue={book.publication_date}
                      onChange={(e) => setEditedPublicationDate(e.target.value)} />
              </div>
          </div>
          <div className='d-flex col-sm-6'>
              <div className='label col-sm-4'>
                  Image &nbsp;&nbsp;
              </div>
              <div className='col-sm-8'>
                  <input type='file'
                      className='inputfield'
                      name='image'
                      
                      onChange={(e) => setEditedImage(e.target.files[0])} />
                      {/* (e) => setImage(e.target.files[0]) */}
              </div>
          </div>
      </div>
      <div className='d-flex row mb-1'>
          <div className='d-flex col-sm-6'>
              <div className='label col-sm-4'>
                  Author &nbsp;&nbsp;
              </div>
              <div className='col-sm-8'>
             {/* { setEditedAuthorId(book.author_id)} */}
              <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={adata}
                      getOptionLabel={(option) => option.name}
                      sx={{ width: '225px',
                          '& .MuiInputBase-root': {
                              height: '32px', // Adjust input height as needed
                              
                          },}}
                      //value={adata.find((option) => option.author_id === authorId) || null}
                      
                      value={adata.find((option) => option.author_id === book.author_id) || null}
                      onChange={(event, newValue) => {
                          setEditedAuthorId(newValue ? newValue.author_id : null);
                      }}
                      renderInput={(params) => <TextField  {...params}  />}
                  />
              </div>
          </div>
          <div className='d-flex col-sm-6'>
              <div className='label col-sm-4'>
                  Genre &nbsp;&nbsp;
              </div>
              <div className='col-sm-8'>
                {/* {setEditedGenreId(book.genre_id)} */}
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={gdata}
                      getOptionLabel={(option) => option.genre_name}
                      sx={{ width: '225px',
                          '& .MuiInputBase-root': {
                              height: '32px', // Adjust input height as needed
                              
                          },}}
                      //value={gdata.find((option) => option.genre_id === genreId) || null}
                      value={gdata.find((option) => option.genre_id === book.genre_id) || null}
                      onChange={(event, newValue) => {
                          setEditedGenreId(newValue ? newValue.genre_id : null);
                      }}
                      renderInput={(params) => <TextField  {...params}  />}
                  />
              </div>
          </div>
    </div>
     </div>               
            
    : 
    <div className='row mt-2 mb-2 d-flex align-items-center text-center'>
        <div className='col-sm-1'>
         <img src={`http://localhost:3000/${book.image}`} alt={book.title} className='bookimg'/>
        {/* {console.log('/Users/ayushi-khare/Academy/ink-papers_backend/'+ book.image)} */}
        </div>
        <div className='col-sm-2 '>
        &nbsp; {book.title}
        </div>
        <div className='col-sm-1'>
        &nbsp; {book.price}
        </div>
        <div className='col-sm-2'>
        &nbsp; {String(book.publication_date).slice(0, 10)}
        </div>
        <div className='col-sm-2'>
            {book.Author.name}
        </div>
        <div className='col-sm-2'>
            {book.Genre.genre_name}
        </div>
        <div className='col-sm-1'>
            <AiFillEdit size={20} onClick={()=>{enableEdit(book.book_id)}} />
            {/* onClick={()=>{enableEdit(author.author_id)}} */}
        </div>
        <div className='col-sm-1'>
            <MdDelete size={20} onClick={()=>{deleteBook(book.book_id)}} />
            {/* onClick={()=>{deleteAuthor(author.author_id)}} */}
        </div>
    </div>
  
   } 
    </div>
  );



  return (
    <div >
    <div className='row mt-2 mb-2 booklistheader'>
        
        <div className='col-sm-1'>
        Image
        </div>

        <div className='col-sm-2'>
        Title
        </div>

        <div className='col-sm-1'>
        Price
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
            ...
        </div>
        <div className='col-sm-1'>
           ...
            
        </div>
    </div>
  
   
    
    <div>
      {data.map(book => renderBook(book)) }
    </div>
    </div>
  )
}

export default BookList
