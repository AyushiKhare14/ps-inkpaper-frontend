// import React, { useState, useEffect } from 'react'
// import { AiFillEdit } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// //import Alert from '@mui/material/Alert';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';

// function BookList(props) {

//     const [openEdit, setOpenEdit] = React.useState(false);
//     const [openDel, setOpenDel] = React.useState(false);

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpenEdit(false);
//     setOpenDel(false);
//   };

//   let [data, setData] = useState([]);
//   let [delStat, setDelStat] = useState(0);
//   let [editId, setEditId] = useState(0);
//   //let [editStat, setEditStat] = useState(false);
//   const [gdata, setGdata] = useState([]);
//   const [adata, setAdata] = useState([]);
//   let [editedData, setEditedData] = useState({});


//   const [editedTitle, setEditedTitle] = useState("");
//   const [editedPrice, setEditedPrice] = useState("");
//   const [editedPublicationDate, setEditedPublicationDate] = useState("");
//   const [editedImage, setEditedImage] = useState(null);
//   const [editedAuthorId, setEditedAuthorId] = useState("");
//   const [editedGenreId, setEditedGenreId] = useState(""); 

//   const enableEdit = (id) =>{
//     setEditId(editId = id)
//     getAllAuthors()
//     getAllGenres()
//   }

//   const  getAllBooks = async ()=> {
//     const responseData = await fetch("http://localhost:3000/api/book");
//     const books =  await responseData.json();
//     setData(data = books);

    
//     //Sorting methods

//   //By title
//   const sortData = (data) =>{
//     data.sort(function(a, b) {
//       return a.title.localeCompare(b.title);
//     });
//   }
//   const sortDataReverse = (data) =>{
//     data.sort(function(a, b) {
//       return b.title.localeCompare(a.title);
//     });}

//     //By Price
  
//     const sortPrice = (data) =>{
//         data.sort(function(a, b) {
//           //return a.price.localeCompare(b.price);
//           return a.price - b.price;
//         });
//       }
//       const sortPriceReverse = (data) =>{
//         data.sort(function(a, b) {
//           //return b.price.localeCompare(a.price);
//           return b.price - a.price;
//         });}


//     // By Published date

//     const sortPDate = (data) =>{
//         console.log("inside sort")
//         data.sort(function(a, b) {
//           //return a.published_date.localeCompare(b.published_date);
//           return new Date(a.published_date) - new Date(b.published_date);
//         });
//       }
//       const sortPDateReverse = (data) =>{
//         data.sort(function(a, b) {
//             console.log("inside sort rev")
//           //return b.published_date.localeCompare(a.published_date);
//           return new Date(b.published_date) - new Date(a.published_date);
//         });}

//         if (props.sortBook===1){
        
//             sortData(data);
//         }
//         else if (props.sortBook===2){
//             sortDataReverse(data);
//         }
//         else{
//             setData(data = books);
//         }
    
//         props.sortPrice ===1 ? sortPrice(data) : props.sortPrice ===2 ? sortPriceReverse(data) : setData(data = books);
    
//         props.sortPublishedDate === 1 ? sortPDate(data) : props.sortPublishedDate === 2 ? sortPDateReverse(data) : setData(data = books);


//     }

  
//   const deleteBook = async (id)=>{
//     await fetch('http://localhost:3000/api/book/' + id, { method: 'DELETE' });
//            setDelStat(Math.random())
//            setOpenDel(true)
//   }



//   const getAllGenres = async () => {
//     try {
//         const responseData = await fetch("http://localhost:3000/api/genre");
//         //const genres = await responseData.json();
//         //setGdata(genres.map((item) => ({ label: item.genre_name, id: item.genre_id })));
//         setGdata(await responseData.json())
//     } catch (error) {
//         console.error('Error fetching genres:', error);
//     }
//   };


//   const getAllAuthors = async () => {
//       try {
//           const responseData = await fetch("http://localhost:3000/api/author");
//           setAdata(await responseData.json())
          
//       } catch (error) {
//           console.error('Error fetching authors:', error);
//       }
//   };

//   const handleBookEdit = async (id) => {

//     const formdata = new FormData();

//     if (editedTitle) {
//         formdata.set("title", editedTitle);
//     }

//     if (editedPrice) {
//         formdata.set("price", editedPrice);
//     }

//     if (editedPublicationDate) {
//         formdata.set("publication_date", editedPublicationDate);
//     }

//     if (editedImage) {
//         formdata.append("image", editedImage); // For file uploads, use append
//     }

//     if (editedAuthorId) {
//         formdata.set("author_id", editedAuthorId);
//     }

//     if (editedGenreId) {
//         formdata.set("genre_id", editedGenreId);
//     }

//     try {
//         const response = await fetch(`http://localhost:3000/api/book/${id}`, {
//             method: "PUT",
//             body: formdata, 
//         }); 
//         if (response.ok) {
//           setEditId(0);
//           setOpenEdit(true)
          
          
//       } else {
//           throw new Error("Failed to update book");
//       }
//   } catch (error) {
//       console.error("Error updating book:", error);
      
//       alert("Failed to update book. Please try again.");
//   }    
// }


  

//   // setting up the list
//   useEffect(()=>{
//     getAllBooks()
//   },[props, delStat, editId])

//   //Searched data

//   let searchedData = data.filter(book => {
//     let title = book.title.toUpperCase();
//     let toSearch = props.search.toUpperCase();
//     if(title.includes(toSearch)){
//         return true;
//     }})

//     let filteredAuthorData = data.filter(book => {
//         //let title = book.title.toUpperCase();
//         let author_id = props.filterByAuthor;
//         if(book.author_id === author_id){
//             return true;
//         }})

//     let filteredGenreData = data.filter( book =>{
//         let genre_id = props.filterByGenre;
//         if(book.genre_id === genre_id){
//             return true
//         }})

        

//   // Rending Data

//   const renderBook = (book) => (
      
//     <div className='genretext' key={book.book_id}>
       
//     {editId == book.book_id 
      
//     ?

//     <div className="">
//       <div className='d-flex row mb-1'>
//           <div className='d-flex col-sm-6 '>
//               <div className='label col-sm-4'>
//                   Book Name &nbsp;&nbsp;
//               </div>
//               <div className=' col-sm-8'>
//                   <input type='text'
//                       name='title'
//                       className='inputfield'
//                       defaultValue={book.title}
//                       onChange={(e) => setEditedTitle(e.target.value)} />
//               </div>
//           </div>
//           <div className='d-flex col-sm-6'>
//               <div className='label col-sm-4'>
//                   Price in INR &nbsp;&nbsp;
//               </div>
//               <div className='col-sm-8'>
//                   <input type='text'
//                       name='price'
//                       className='inputfield'
//                       defaultValue={book.price}
//                       onChange={(e) => setEditedPrice(e.target.value)} />
//               </div>
//           </div>
//       </div>
//       <div className='d-flex row mb-1'>
//           <div className='d-flex col-sm-6'>
//               <div className='label col-sm-4'>
//                   Publication Date &nbsp;&nbsp;
//               </div>
//               <div className='col-sm-8'>
//                   <input type='date'
//                       className='inputfield'
//                       name='publication_date'
//                       //defaultValue={book.publication_date}
//                       defaultValue={book.publication_date ? new Date(book.publication_date).toISOString().split('T')[0] : ''}
               
//                       onChange={(e) => setEditedPublicationDate(e.target.value)} />
//               </div>
//           </div>
//           <div className='d-flex col-sm-6'>
//               <div className='label col-sm-4'>
//                   Image &nbsp;&nbsp;
//               </div>
//               <div className='col-sm-8'>
//                   <input type='file'
//                       className='inputfield'
//                       name='image'
                      
//                       onChange={(e) => setEditedImage(e.target.files[0])} />
//                       {/* (e) => setImage(e.target.files[0]) */}
//               </div>
//           </div>
//       </div>
//       <div className='d-flex row mb-1'>
//           <div className='d-flex col-sm-6'>
//               <div className='label col-sm-4'>
//                   Author &nbsp;&nbsp;
//               </div>
//               <div className='col-sm-8'>
//              {/* { setEditedAuthorId(book.author_id)} */}
//               <Autocomplete
//                       disablePortal
//                       id="combo-box-demo"
//                       options={adata}
//                       getOptionLabel={(option) => option.name}
//                       sx={{ width: '225px',
//                           '& .MuiInputBase-root': {
//                               height: '32px', // Adjust input height as needed
                              
//                           },}}
//                       //value={adata.find((option) => option.author_id === authorId) || null}
                      
//                       value={adata.find((option) => option.author_id === book.author_id) || null}
//                       onChange={(event, newValue) => {
//                           setEditedAuthorId(newValue ? newValue.author_id : null);
//                       }}
//                       renderInput={(params) => <TextField  {...params}  />}
//                   />
//               </div>
//           </div>
//           <div className='d-flex col-sm-6'>
//               <div className='label col-sm-4'>
//                   Genre &nbsp;&nbsp;
//               </div>
//               <div className='col-sm-8'>
//                 {/* {setEditedGenreId(book.genre_id)} */}
//                   <Autocomplete
//                       disablePortal
//                       id="combo-box-demo"
//                       options={gdata}
//                       getOptionLabel={(option) => option.genre_name}
//                       sx={{ width: '225px',
//                           '& .MuiInputBase-root': {
//                               height: '32px', // Adjust input height as needed
                              
//                           },}}
//                       //value={gdata.find((option) => option.genre_id === genreId) || null}
//                       value={gdata.find((option) => option.genre_id === book.genre_id) || null}
//                       onChange={(event, newValue) => {
//                           setEditedGenreId(newValue ? newValue.genre_id : null);
//                       }}
//                       renderInput={(params) => <TextField  {...params}  />}
//                   />
//               </div>
//           </div>
//     </div>
//     <div className='d-flex justify-content-center mt-3'>
//         <button className='btn btn-secondary' onClick={()=>setEditId(0)}>Discard Update</button>
//         &nbsp;&nbsp;
//         <button className='btn btn-warning' onClick={()=>handleBookEdit(book.book_id)}>Update Book</button>
        
//     </div>
//      </div>               
            
//     : 
//     <div className='row mt-2 mb-2 d-flex align-items-center text-center'>
//         <div className='col-sm-1'>
            
//             {book.image === "null"
            
//         ?  <img src={`http://localhost:3000/images/dummy.jpg`} alt="No Image Available" className='bookimg' />
//         : <img src={`http://localhost:3000/${book.image}`} alt={book.title} className='bookimg' />
//       }
        
        
//         </div>
//         <div className='col-sm-2 '>
//         &nbsp; {book.title}
//         </div>
//         <div className='col-sm-1'>
//         &nbsp; {book.price}
//         </div>
//         <div className='col-sm-2'>
//         &nbsp; {String(book.publication_date).slice(0, 10)}
//         </div>
//         <div className='col-sm-2'>
//             {book.Author.name}
//         </div>
//         <div className='col-sm-2'>
//             {book.Genre.genre_name}
//         </div>
//         <div className='col-sm-1'>
//             <AiFillEdit size={20} onClick={()=>{enableEdit(book.book_id)}} />
//             {/* onClick={()=>{enableEdit(author.author_id)}} */}
//         </div>
//         <div className='col-sm-1'>
//             <MdDelete size={20} onClick={()=>{deleteBook(book.book_id)}} />
//             {/* onClick={()=>{deleteAuthor(author.author_id)}} */}
//         </div>

//     </div>
  
//    } 
//     </div>
//   );



//   return (
//     <div >
    
    
//       <div>
//       {props.search 
//       ? searchedData.map(book => renderBook(book))
//       : props.filterByAuthor ? filteredAuthorData.map(book => renderBook(book)) :
//       props.filterByGenre ? filteredGenreData.map(book => renderBook(book)) :
//       data.map(book => renderBook(book)) }
//       </div>

       

//       <Snackbar open={openEdit} autoHideDuration={4000} onClose={handleClose}>
//         <Alert
//           onClose={handleClose}
//           severity="info"
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           Book Updated Successfully!
//         </Alert>
//       </Snackbar>

//       <Snackbar open={openDel} autoHideDuration={4000} onClose={handleClose}>
//         <Alert
//           onClose={handleClose}
//           severity="warning"
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           Book Removed Successfully!
//         </Alert>
//       </Snackbar>

//     </div>
//   )
// }

// export default BookList




///////////////////


import React, { useState, useEffect } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function BookList(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenEdit(false);
    setOpenDel(false);
  };

  let [data, setData] = useState([]);
  let [delStat, setDelStat] = useState(0);
  let [editId, setEditId] = useState(0);
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
    getAllAuthors();
    getAllGenres();
  };

  const getAllBooks = async () => {
    try {
      const responseData = await fetch("http://localhost:3000/api/book");
      const books = await responseData.json();
      setData(books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/book/${id}`, { method: 'DELETE' });
      setDelStat(Math.random());
      setOpenDel(true);
      setDeleteId(null);
      setOpenDeleteDialog(false);
    } catch (error) {
      console.error('Error deleting book:', error);
      alert("Failed to delete book. Please try again.");
    }
  };

  const confirmDeleteBook = (id) => {
    setDeleteId(id);
    setOpenDeleteDialog(true);
  };

  const getAllGenres = async () => {
    try {
      const responseData = await fetch("http://localhost:3000/api/genre");
      const genres = await responseData.json();
      setGdata(genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const getAllAuthors = async () => {
    try {
      const responseData = await fetch("http://localhost:3000/api/author");
      const authors = await responseData.json();
      setAdata(authors);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const handleBookEdit = async (id) => {
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
        formdata.append("image", editedImage);
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
            body: formdata, 
        }); 
        if (response.ok) {
            setEditId(0);
            setOpenEdit(true);
        } else {
            throw new Error("Failed to update book");
        }
    } catch (error) {
        console.error("Error updating book:", error);
        alert("Failed to update book. Please try again.");
    }    
  };

  useEffect(() => {
    getAllBooks();
  }, [props, delStat, editId]);

  //Sorting methods

  //By title
  const sortData = (data) =>{
    data.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
  }
  const sortDataReverse = (data) =>{
    data.sort(function(a, b) {
      return b.title.localeCompare(a.title);
    });}

    //By Price
  
    const sortPrice = (data) =>{
        data.sort(function(a, b) {
          //return a.price.localeCompare(b.price);
          return a.price - b.price;
        });
      }
      const sortPriceReverse = (data) =>{
        data.sort(function(a, b) {
          //return b.price.localeCompare(a.price);
          return b.price - a.price;
        });}


    // By Published date

    const sortPDate = (data) =>{
        console.log("inside sort")
        data.sort(function(a, b) {
          //return a.published_date.localeCompare(b.published_date);
          return new Date(a.published_date) - new Date(b.published_date);
        });
      }
      const sortPDateReverse = (data) =>{
        data.sort(function(a, b) {
            console.log("inside sort rev")
          //return b.published_date.localeCompare(a.published_date);
          return new Date(b.published_date) - new Date(a.published_date);
        });}

        if (props.sortBook===1){
        
            sortData(data);
        }
        else if (props.sortBook===2){
            sortDataReverse(data);
        }
        else{
            setData(data = books);
        }
    
        props.sortPrice ===1 ? sortPrice(data) : props.sortPrice ===2 ? sortPriceReverse(data) : setData(data = books);
    
        props.sortPublishedDate === 1 ? sortPDate(data) : props.sortPublishedDate === 2 ? sortPDateReverse(data) : setData(data = books);



  let searchedData = data.filter(book => {
    let title = book.title.toUpperCase();
    let toSearch = props.search.toUpperCase();
    if(title.includes(toSearch)) {
        return true;
    }
  });

  let filteredAuthorData = data.filter(book => {
    let author_id = props.filterByAuthor;
    if(book.author_id === author_id) {
        return true;
    }
  });

  let filteredGenreData = data.filter(book => {
    let genre_id = props.filterByGenre;
    if(book.genre_id === genre_id) {
        return true;
    }
  });

  const renderBook = (book) => (
    <div className='genretext' key={book.book_id}>
      {editId == book.book_id ?
        <div className="">
          {/* Edit form */}
        </div>
        :
        <div className='row mt-2 mb-2 d-flex align-items-center text-center'>
          <div className='col-sm-1'>
            {book.image === "null" ?
              <img src={`http://localhost:3000/images/dummy.jpg`} alt="No Image Available" className='bookimg' />
              : <img src={`http://localhost:3000/${book.image}`} alt={book.title} className='bookimg' />
            }
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
            <AiFillEdit size={20} onClick={() => enableEdit(book.book_id)} />
          </div>
          <div className='col-sm-1'>
            <MdDelete size={20} onClick={() => confirmDeleteBook(book.book_id)} />
          </div>
        </div>
      }
    </div>
  );

  return (
    <div>
      <div>
        {props.search ? searchedData.map(book => renderBook(book)) :
          props.filterByAuthor ? filteredAuthorData.map(book => renderBook(book)) :
          props.filterByGenre ? filteredGenreData.map(book => renderBook(book)) :
          data.map(book => renderBook(book))
        }
      </div>

      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this book?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className='btn btn-secondary' onClick={() => setOpenDeleteDialog(false)}>Cancel</button>
          <button className='btn btn-danger' onClick={() => deleteBook(deleteId)}>Delete</button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openEdit} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Book Updated Successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={openDel} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"    
          variant="filled"
          sx={{ width: '100%' }}
        >
          Book Removed Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default BookList;

