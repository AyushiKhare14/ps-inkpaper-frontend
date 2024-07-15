import React, { useState } from 'react'
import { successAlert } from '../../utils/alerts';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Genreform({setGenreAddStatus}) {
  let [genreName, setGenreName] = useState("");
  const [open, setOpen] = React.useState(false);


  const handleGenreName=(e) =>{
    setGenreName(e.target.value)
    
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const handleGenreSubmit =()=>{
    if(genreName===""){
      alert("Cannot submit blank entry!");
      return;
    }
    const bodyData = {
        "genre_name" : genreName,
    }

    ////////////////
    fetch("http://localhost:3000/api/genre", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {"Content-type": 
                "application/json; charset=UTF-8"},
    })
    .then(response => {
      if (response.ok) {
      response.json()}
      else{
          throw new Error('Trouble while adding new genre! Please make sure the genre is not already present in the list.');
      }
  }) 
    .then(json => {
      setGenreName("")
      setGenreAddStatus("Hello"+ Math.random())
      //alert("Genre Added Successfully");
      setOpen(true);
    })
    .catch(err => {

      alert(err);
    }); 

  }

  return (
    <>
    <div className='d-flex justify-content-around '>
      <div className='flex-fill'>
        <input type="text" name="genre_name" required id="genre_name" className="form-control" value={genreName} onChange={handleGenreName} placeholder="Type new genre name" />
      </div>
      <div>
        <button className="btn btn-dark ms-2"  onClick={handleGenreSubmit}>Add Genre</button>     
       </div>
       <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Genre Added Successfully!
        </Alert>
      </Snackbar>
    </div>
    
    </>   
  )
}

export default Genreform
