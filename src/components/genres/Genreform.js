import React, { useState } from 'react'

function Genreform({setGenreAddStatus}) {
  let [genreName, setGenreName] = useState("");


  const handleGenreName=(e) =>{
    setGenreName(e.target.value)
    
  }

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
          throw new Error('Partially filled form cannot be submitted!');
      }
  }) 
    .then(json => {
      setGenreName("")
      setGenreAddStatus("Hello"+ Math.random())
      //alert("Genre Added Successfully");
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

    </div>
    
    </>   
  )
}

export default Genreform
