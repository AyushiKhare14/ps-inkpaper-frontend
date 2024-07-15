// import React from 'react'
// import { useEffect, useState } from 'react';
// import { AiFillEdit } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import { IoCheckmarkDoneCircle } from "react-icons/io5";
// import { MdCancel } from "react-icons/md";
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';


// function AuthorList(props) {

//   const [openEdit, setOpenEdit] = React.useState(false);
//   const [openDel, setOpenDel] = React.useState(false);

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpenEdit(false);
//     setOpenDel(false);
//   };
  

//     let [data, setData] = useState([]);
//     let [editId, setEditId] = useState(0);
//     let [editStat, setEditStat] = useState(false);
//     let [delStat, setDelStat] = useState(0);
//     let [authorName, setAuthorName] = useState("");
//     let [authorBio, setAuthorBio] = useState("");
    

//     const enableEdit = (id) =>{
//         setEditId(editId = id)
//       }

//     const  getAllAuthors = async ()=> {

//     const responseData = await fetch("http://localhost:3000/api/author");
    
//     const authors =  await responseData.json();

    
//     setData(data = authors);
    
//     if (props.sortAuthor==1){
        
//         sortData(data);
//     }
//     else if (props.sortAuthor==2){
//         sortDataReverse(data);
//     }
//     else{
//         setData(data = authors);
//     }
//     }

//     const sortData = (data) =>{
//         data.sort(function(a, b) {
//           return a.name.localeCompare(b.name);
//         });
//       }
//       const sortDataReverse = (data) =>{
//         data.sort(function(a, b) {
//           return b.name.localeCompare(a.name);
//         });}


//         const handleNameChange = (e)=>{
   
//             setAuthorName(authorName = e.target.value)
//             checkEditStatus();
//           }

//           const handleBioChange = (e)=>{
   
//             setAuthorBio(authorBio = e.target.value)
//             checkEditStatus();
//           }
        
//         const checkEditStatus = ()=>{
//             if (authorBio==="" && authorName==="")
//                 setEditStat(false);
//               else{
//                 setEditStat(true);
//               }
//         }
         
//         const updateAuthor = (id, name, bio) => {
      
//           if(editStat){
              
//               if(authorName===""){
//                 setAuthorName(authorName=name)
//               }
//               if(authorBio===""){
//                 setAuthorBio(authorBio=bio)
//               }
//               const bodyData = {
//                   "name" : authorName,
//                   "biography" : authorBio,
//               }
//               console.log(bodyData)
//               fetch("http://localhost:3000/api/author/" + id, {
//                 method: "PUT",
//                 body: JSON.stringify(bodyData),
//                 headers: {"Content-type": 
//                           "application/json; charset=UTF-8"},
//               })
//               .then(response => {
//                 if (response.ok) {
//                   setEditId(editId=0);
//                   setEditStat(editStat=false);
//                   setOpenEdit(true)
//                 }
//                 else{
//                     throw response;
//                 }
//             }) 
//               .catch(err => {
//                 alert(err);
//               }); 
//           }
//             else{
//               setEditId(editId=0);
//               setEditStat(editStat=false);}
//         }
      
//         const deleteAuthor = async (id)=>{
//           // try{
//           //  await fetch('http://localhost:3000/api/author/' + id, { method: 'DELETE' });
//           //  setDelStat(Math.random())
//           //  setOpenDel(true)}
//           //  catch (e){
//           //   alert('Failed to delete author, since it is linked with a book. Kinldy delete the associated book entry first.');
//           //  }

//           fetch(`http://localhost:3000/api/author/${id}`, { method: 'DELETE' })
//       .then(response => {
//         if (response.ok) {
          
//           setDelStat(Math.random());
//           setOpenDel(true);
//         } else {
//           throw new Error('Failed to delete genre');
//         }
//       })
//       .catch(error => {
        
//         alert('Failed to delete author, since it is part of a book entry. Kinldy delete the associated book entry first.');
//       });
//         }
        
//           useEffect(() => { 
            
//             getAllAuthors()
           
//           },[ delStat, props, editStat])
      
//       // Getting searched genre name

//       let searchedData = data.filter(author => {
//         let authorName = author.name.toUpperCase();
//         let authorBio = author.biography.toUpperCase();
//         let toSearch = props.search.toUpperCase();
//         if(authorName.includes(toSearch) || authorBio.includes(toSearch)){
//             return true;
//         }
//     })


//     // Rending Data

//     const renderAuthor = (author) => (
      
//         <div className='genretext' key={author.author_id}>
           
//           {editId == author.author_id 
          
//         ?
  
//         <div className='row  ' >
//             <div className='col-sm-2' >
//                 <input type="text" defaultValue={author.name} size={6} onChange={handleNameChange}  name="author" className='form-control' 
//                  />
//             </div>
//             <div className='col-sm-8 ' >
//                 <textarea defaultValue={author.biography} onChange={handleBioChange} name="bio" className='form-control'
//                 ></textarea>
                
//             </div>
//             <div className='col-sm-1 mt-3 '>
//                 <IoCheckmarkDoneCircle size={25} color='green' onClick={()=>{updateAuthor(author.author_id, author.name, author.biography)}}/>
//             </div>
//             <div className='col-sm-1 mt-3'>
//                 <MdCancel size={25} color='red' 
//                 onClick={()=>{setEditId(editId=0)}} 
//                 />
//             </div>
//         </div>
                
//         :
//         <div className='row mt-2 mb-2'>
//             <div className='col-sm-2'>
//             &nbsp; {author.name}
//             </div>
//             <div className='col-sm-8'>
//                 {author.biography}
//             </div>
//             <div className='col-sm-1'>
//                 <AiFillEdit size={20} onClick={()=>{enableEdit(author.author_id)}}/>
//             </div>
//             <div className='col-sm-1'>
//                 {/* <button data-bs-toggle="modal" data-bs-target="#exampleModal"><MdDelete size={20} 
//                 // onClick={()=>{deleteAuthor(author.author_id)}} 
//                 /></button> */}
//                  <MdDelete size={20} onClick={()=>{deleteAuthor(author.author_id)}} 
//                 />

//                 {/* <!-- Modal --> */}
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
//                         <button type="button" class="btn btn-warning" onClick={()=>{deleteAuthor(author.author_id)} } data-bs-dismiss="modal">Confirm Delete</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//             </div>
//         </div>
      
//         }
//         </div>
//       );
  

//   return (
//     <div>
//      {
//       props.search 
//       ? searchedData.map(author => renderAuthor(author))
//       :   data.map(author => renderAuthor(author)) 
        
//      }

//       <Snackbar open={openEdit} autoHideDuration={4000} onClose={handleClose}>
//         <Alert
//           onClose={handleClose}
//           severity="info"
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           Author Updated Successfully!
//         </Alert>
//       </Snackbar>

//       <Snackbar open={openDel} autoHideDuration={4000} onClose={handleClose}>
//         <Alert
//           onClose={handleClose}
//           severity="warning"
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           Author Removed Successfully!
//         </Alert>
//       </Snackbar>

//     </div>
//   )
// }

// export default AuthorList



////////////////////////


import React, { useEffect, useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function AuthorList(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(0);
  const [editStat, setEditStat] = useState(false);
  const [delStat, setDelStat] = useState(0);
  const [authorName, setAuthorName] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenEdit(false);
    setOpenDel(false);
  };

  const enableEdit = (id) => {
    setEditId(id);
  }

  const getAllAuthors = async () => {
    const responseData = await fetch("http://localhost:3000/api/author");
    const authors = await responseData.json();
    setData(authors);
    if (props.sortAuthor === 1) {
      sortData(authors);
    } else if (props.sortAuthor === 2) {
      sortDataReverse(authors);
    } else {
      setData(authors);
    }
  }

  const sortData = (data) => {
    data.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  const sortDataReverse = (data) => {
    data.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  }

  const handleNameChange = (e) => {
    setAuthorName(e.target.value);
    checkEditStatus();
  }

  const handleBioChange = (e) => {
    setAuthorBio(e.target.value);
    checkEditStatus();
  }

  const checkEditStatus = () => {
    if (authorBio === "" && authorName === "") {
      setEditStat(false);
    } else {
      setEditStat(true);
    }
  }

  const updateAuthor = (id, name, bio) => {
    if (editStat) {
      if (authorName === "") {
        setAuthorName(name);
      }
      if (authorBio === "") {
        setAuthorBio(bio);
      }
      const bodyData = {
        "name": authorName,
        "biography": authorBio,
      }
      fetch("http://localhost:3000/api/author/" + id, {
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

  const deleteAuthor = (id) => {
    setConfirmDelete(id);
  }

  const handleDeleteConfirmed = () => {
    fetch(`http://localhost:3000/api/author/${confirmDelete}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setDelStat(Math.random());
          setOpenDel(true);
        } else {
          throw new Error('Failed to delete author');
        }
      })
      .catch(error => {
        alert('Failed to delete author, since it is part of a book entry. Kinldy delete the associated book entry first.');
      });
    setConfirmDelete(null); // Clear confirmation state
  }

  useEffect(() => {
    getAllAuthors();
  }, [delStat, props, editStat]);

  // Getting searched author name
  let searchedData = data.filter(author => {
    let authorName = author.name.toUpperCase();
    let authorBio = author.biography.toUpperCase();
    let toSearch = props.search.toUpperCase();
    return authorName.includes(toSearch) || authorBio.includes(toSearch);
  });

  // Rendering Data
  const renderAuthor = (author) => (
    <div className='genretext' key={author.author_id}>
      {editId === author.author_id ?
        <div className='row' >
          <div className='col-sm-2' >
            <input type="text" defaultValue={author.name} size={6} onChange={handleNameChange} name="author" className='form-control' />
          </div>
          <div className='col-sm-8 ' >
            <textarea defaultValue={author.biography} onChange={handleBioChange} name="bio" className='form-control'></textarea>
          </div>
          <div className='col-sm-1 mt-3 '>
            <IoCheckmarkDoneCircle size={25} color='green' onClick={() => { updateAuthor(author.author_id, author.name, author.biography) }} />
          </div>
          <div className='col-sm-1 mt-3'>
            <MdCancel size={25} color='red' onClick={() => { setEditId(0) }} />
          </div>
        </div>
        :
        <div className='row mt-2 mb-2' >
          <div className='col-sm-2'>
            &nbsp; {author.name}
          </div>
          <div className='col-sm-8'>
            {author.biography}
          </div>
          <div className='col-sm-1'>
            <AiFillEdit size={20} onClick={() => { enableEdit(author.author_id) }} />
          </div>
          <div className='col-sm-1'>
            <MdDelete size={20} onClick={() => deleteAuthor(author.author_id)} />
            {confirmDelete === author.author_id && (
              <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Delete Confirmation</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setConfirmDelete(null)}></button>
                    </div>
                    <div className="modal-body">
                      Are you sure you want to delete this author?
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setConfirmDelete(null)}>Cancel</button>
                      <button type="button" className="btn btn-danger" onClick={handleDeleteConfirmed} data-bs-dismiss="modal">Confirm Delete</button>
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
        searchedData.map(author => renderAuthor(author))
        : data.map(author => renderAuthor(author))
      }

      <Snackbar open={openEdit} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Author Updated Successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={openDel} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Author Removed Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AuthorList;
