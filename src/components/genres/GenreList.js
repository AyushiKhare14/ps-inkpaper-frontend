// import React from 'react'
// import { useEffect, useState } from 'react';
// import { AiFillEdit } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';


// function GenreList(props) {

//   const [openEdit, setOpenEdit] = React.useState(false);
//   const [openDel, setOpenDel] = React.useState(false);

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpenEdit(false);
//     setOpenDel(false);
//   };
  

//   let [data, setData] = useState([]);
//   let [editId, setEditId] = useState(0);
//   let [delStat, setDelStat] = useState(0);
//   let [genreName, setGenreName] = useState("");
//   let [editStat, setEditStat] = useState(false);

 

//   const enableEdit = (id) =>{
//     setEditId(editId = id)
//   }


//  const  getAllGenres = async ()=> {
  
//     const responseData = await fetch("http://localhost:3000/api/genre");
   
//     const genres =  await responseData.json();

    
//     setData(data = genres);
    
//     if (props.sortGenre==1){
      
//       sortData(data);
//     }
//     else if (props.sortGenre==2){
//       sortDataReverse(data);
//     }
//     else{
//       setData(data = genres);
//     }
//   }


//   const handleGenreChange = (e)=>{
   
//       setGenreName(genreName = e.target.value)
     
//       if (genreName==="")
//         setEditStat(false);
//       else{
//         setEditStat(true);
//       }
//     }
    
   
//   const updateGenre = (id) => {

//     if(editStat){
        
//         if(genreName===""){
//           alert("Cannot submit blank entry!");
//           return;
//         }
//         const bodyData = {
//             "genre_name" : genreName,
//         }

//         fetch("http://localhost:3000/api/genre/" + id, {
//           method: "PUT",
//           body: JSON.stringify(bodyData),
//           headers: {"Content-type": 
//                     "application/json; charset=UTF-8"},
//         })
//         .then(response => {
//           if (response.ok) {
//             setEditId(editId=0);
//             setEditStat(editStat=false);
//             setOpenEdit(true);
//           }
//           else{
//               throw response;
//           }
//       }) 
//         .catch(err => {
//           alert(err);
//         }); 
//     }
//       else{
//         setEditId(editId=0);
//         setEditStat(editStat=false);}
//   }

//   // const deleteGenre = async (id)=>{
//   //    await fetch('http://localhost:3000/api/genre/' + id, { method: 'DELETE' });
//   //    setDelStat(Math.random())
//   // }

//   const deleteGenre = (id)=>{
//     fetch(`http://localhost:3000/api/genre/${id}`, { method: 'DELETE' })
//     .then(response => {
//       if (response.ok) {
        
//         setDelStat(Math.random());
//         setOpenDel(true);
//       } else {
//         throw new Error('Failed to delete genre');
//       }
//     })
//     .catch(error => {
      
//       alert('Failed to delete genre, since it is part of a book entry. Kinldy delete the associated book entry first.');
//     });

    
//     // setDelStat(Math.random())
//  }
  
//     useEffect(() => { 
//       //console.log("inside use")
//       getAllGenres()
     
//     },[ delStat, props, editStat])


//   const sortData = (data) =>{
//     data.sort(function(a, b) {
//       return a.genre_name.localeCompare(b.genre_name);
//     });
//   }
//   const sortDataReverse = (data) =>{
//     data.sort(function(a, b) {
//       return b.genre_name.localeCompare(a.genre_name);
//     });}

//     // Getting searched genre name

//       let searchedData = data.filter(genre => {
//       let genreName = genre.genre_name.toUpperCase();
//       let toSearch = props.search.toUpperCase();
//       if(genreName.includes(toSearch)){
//           return true;
//       }
//   })


//   // Rending Data

//     const renderGenres = (genre) => (
      
//       <div className='d-flex genretext' key={genre.genre_id}>
         
//         {editId == genre.genre_id 
        
//       ?

//       <div className='d-flex flex-fill justify-content-between mt-1'>
//         <div className='flex-fill ms-4 '>
//         <input type="text" defaultValue={genre.genre_name} onChange={handleGenreChange} autoFocus name="genre" className='form-control' onBlur={()=>{updateGenre(genre.genre_id)}} />
//         </div>
        
//       </div>
              
//       :
//       <div className='d-flex flex-fill justify-content-between mt-1'>
//           <div className='flex-fill ms-4 '>{
//             genre.genre_name
//           }</div>
          

//           <div className='m-1'>
//             <AiFillEdit size={20} onClick={()=>{enableEdit(genre.genre_id)}}/>
//           </div>
//           <div className='m-1'>
//             {/* <button data-bs-toggle="modal" data-bs-target="#exampleModal" > */}
//             <MdDelete size={20}  
//              onClick={()=>{deleteGenre(genre.genre_id)}} />
//              {/* </button> */}
//           {/* Modal */}
//                 {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                   <div class="modal-dialog">
//                     <div class="modal-content">
//                       <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">Delete confirm</h5>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                       </div>
//                       <div class="modal-body">
//                       Please confirm to delete!
//                       </div>
//                       <div class="modal-footer">
//                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
//                         <button type="button" class="btn btn-warning" onClick={()=>{deleteGenre(genre.genre_id)}}  data-bs-dismiss="modal">Confirm Delete</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//           </div>
//         </div>
//       }
//       </div>
//     );

//     return (
//     <div>
//      {
//       props.search 
//       ? searchedData.map(genre => renderGenres(genre))
//       :   data.map(genre => renderGenres(genre)) 
        
//      }

//       <Snackbar open={openEdit} autoHideDuration={4000} onClose={handleClose}>
//         <Alert
//           onClose={handleClose}
//           severity="info"
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           Genre Updated Successfully!
//         </Alert>
//       </Snackbar>

//       <Snackbar open={openDel} autoHideDuration={4000} onClose={handleClose}>
//         <Alert
//           onClose={handleClose}
//           severity="warning"
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           Genre Removed Successfully!
//         </Alert>
//       </Snackbar>
//     </div>
//   )
// }

// export default GenreList


///////////////////



import React, { useEffect, useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function GenreList(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(0);
  const [delStat, setDelStat] = useState(0);
  const [genreName, setGenreName] = useState("");
  const [editStat, setEditStat] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenEdit(false);
    setOpenDel(false);
  };

  const getAllGenres = async () => {
    const responseData = await fetch("http://localhost:3000/api/genre");
    const genres = await responseData.json();
    setData(genres);
    if (props.sortGenre === 1) {
      sortData(data);
    } else if (props.sortGenre === 2) {
      sortDataReverse(data);
    } else {
      setData(genres);
    }
  }

  const handleGenreChange = (e) => {
    setGenreName(e.target.value);
    setEditStat(e.target.value !== "");
  }

  const updateGenre = (id) => {
    if (editStat) {
      if (genreName === "") {
        alert("Cannot submit blank entry!");
        return;
      }
      const bodyData = {
        "genre_name": genreName,
      }
      fetch("http://localhost:3000/api/genre/" + id, {
        method: "PUT",
        body: JSON.stringify(bodyData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then(response => {
          if (response.ok) {
            setEditId(0);
            setEditStat(false);
            setOpenEdit(true);
          } else {
            throw response;
          }
        })
        .catch(err => {
          alert(err);
        });
    } else {
      setEditId(0);
      setEditStat(false);
    }
  }

  const deleteGenre = (id) => {
    setConfirmDelete(id);
  };

  const handleDeleteConfirmed = () => {
    fetch(`http://localhost:3000/api/genre/${confirmDelete}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setDelStat(Math.random());
          setOpenDel(true);
        } else {
          throw new Error('Failed to delete genre');
        }
      })
      .catch(error => {
        alert('Failed to delete genre, since it is part of a book entry. Kinldy delete the associated book entry first.');
      });
    setConfirmDelete(null); // Clear confirmation state
  }

  useEffect(() => {
    getAllGenres();
  }, [delStat, props, editStat]);

  const sortData = (data) => {
    data.sort(function (a, b) {
      return a.genre_name.localeCompare(b.genre_name);
    });
  }

  const sortDataReverse = (data) => {
    data.sort(function (a, b) {
      return b.genre_name.localeCompare(a.genre_name);
    });
  }

  let searchedData = data.filter(genre => {
    let genreName = genre.genre_name.toUpperCase();
    let toSearch = props.search.toUpperCase();
    return genreName.includes(toSearch);
  });

  const renderGenres = (genre) => (
    <div className='d-flex genretext' key={genre.genre_id}>
      {editId === genre.genre_id ?
        <div className='d-flex flex-fill justify-content-between mt-1'>
          <div className='flex-fill ms-4 '>
            <input type="text" defaultValue={genre.genre_name} onChange={handleGenreChange} autoFocus name="genre" className='form-control' onBlur={() => { updateGenre(genre.genre_id) }} />
          </div>
        </div>
        :
        <div className='d-flex flex-fill justify-content-between mt-1'>
          <div className='flex-fill ms-4 '>
            {genre.genre_name}
          </div>
          <div className='m-1'>
            <AiFillEdit size={20} onClick={() => { setEditId(genre.genre_id) }} />
          </div>
          <div className='m-1'>
            <MdDelete size={20} onClick={() => deleteGenre(genre.genre_id)} />
            {confirmDelete === genre.genre_id && (
              <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Delete Confirmation</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setConfirmDelete(null)}></button>
                    </div>
                    <div className="modal-body">
                      Are you sure you want to delete this genre?
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setConfirmDelete(null)}>Cancel</button>
                      <button type="button" className="btn btn-danger" onClick={() => handleDeleteConfirmed()} >Confirm Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  );

  return (
    <div>
      {props.search ?
        searchedData.map(genre => renderGenres(genre)) :
        data.map(genre => renderGenres(genre))
      }
      <Snackbar open={openEdit} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Genre Updated Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openDel} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Genre Removed Successfully!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default GenreList;

