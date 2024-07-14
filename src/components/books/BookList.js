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
  //let [editStat, setEditStat] = useState(false);
  const [gdata, setGdata] = useState([]);
  const [adata, setAdata] = useState([]);
  let [editedData, setEditedData] = useState({});


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

  const handleBookEdit = async (id) => {
    // const formdata = new FormData();

    // if(editedTitle){
    //   // let temp = {"title" : editedTitle}
    //   // setEditedData(editedData = {...editedData, ...temp})
    //   formdata.append("title", editedTitle);
    // }

    // if(editedPrice){
    //   // let temp = {"price" : editedPrice}
    //   // setEditedData(editedData = {...editedData, ...temp})
    //   formdata.append("price", editedPrice);
    // }

    // if(editedPublicationDate){
    //   // let temp = {"publication_date" : editedPublicationDate}
    //   // setEditedData(editedData = {...editedData, ...temp})
    //   formdata.append("publication_date", editedPublicationDate);
    // }

    // if(editedImage){
    //   // let temp = {"image" : editedImage}
    //   // setEditedData(editedData = {...editedData, ...temp})
    //   formdata.append("image", editedImage);
    // }

    // if(editedAuthorId){
    //   // let temp = {"author_id" : editedAuthorId}
    //   // setEditedData(editedData = {...editedData, ...temp})
    //   formdata.append("author_id", editedAuthorId);
    // }

    // if(editedGenreId){
    //   // let temp = {"genre_id" : editedGenreId}
    //   // setEditedData(editedData = {...editedData, ...temp})
    //   formdata.append("genre_id", editedGenreId);
    // }

    // console.log(formdata)

    // fetch("http://localhost:3000/api/book/" + id, {
    //   method: "PUT",
    //   body: JSON.stringify(formdata),
    //   headers: {"Content-type": 
    //             "application/json; charset=UTF-8"},
    // })



    const formdata = new FormData();

    if (editedTitle) {
        formdata.set("title", editedTitle);
    }

    if (editedPrice) {
        formdata.set("price", editedPrice);
    }

    if (editedPublicationDate) {
        formdata.set("publication_date", editedPublicationDate);
    }

    if (editedImage) {
        formdata.append("image", editedImage); // For file uploads, use append
    }

    if (editedAuthorId) {
        formdata.set("author_id", editedAuthorId);
    }

    if (editedGenreId) {
        formdata.set("genre_id", editedGenreId);
    }

    try {
        const response = await fetch(`http://localhost:3000/api/book/${id}`, {
            method: "PUT",
            body: formdata, // FormData object directly
            // No need for JSON content type in headers for FormData
        }); 
        if (response.ok) {
          setEditId(0);
          // Optionally, refresh book list after successful edit
          
      } else {
          throw new Error("Failed to update book");
      }
  } catch (error) {
      console.error("Error updating book:", error);
      // Handle error state here, e.g., show an alert
      alert("Failed to update book. Please try again.");
  }
  //   .then(response => {
  //     if (response.ok) {
  //       setEditId(0);
  //       //setEditStat(editStat=false);
  //     }
  //     else{
  //         throw response;
  //     }
  // }) 
  //   .catch(err => {
  //     alert(err);
  //   }); 

    
    
}


  

  // setting up the list
  useEffect(()=>{
    getAllBooks()
  },[props, delStat, editId])


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
          <div className='d-flex col-sm-6 '>
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
                      //defaultValue={book.publication_date}
                      defaultValue={book.publication_date ? new Date(book.publication_date).toISOString().split('T')[0] : ''}
               
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
    <div className='d-flex justify-content-center mt-3'>
        <button className='btn btn-secondary' onClick={()=>setEditId(0)}>Discard Update</button>
        &nbsp;&nbsp;
        <button className='btn btn-warning' onClick={()=>handleBookEdit(book.book_id)}>Update Book</button>
        
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
    
    
      <div>
        {data.map(book => renderBook(book)) }
      </div>
    </div>
  )
}

export default BookList
