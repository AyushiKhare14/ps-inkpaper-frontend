import React, {useState} from 'react'

function Authorform(setAuthorAddStatus) {
    let [authorName, setAuthorName] = useState("");
    let [authorBio, setAuthorBio] = useState("");


    const handleAuthorName=(e) =>{
        setAuthorName(e.target.value)
      
    }

    const handleAuthorBio=(e) =>{
        setAuthorBio(e.target.value)
        
      }
  
      const handleAuthorSubmit =()=>{
      if(authorName==="" || authorBio===""){
        alert("Cannot submit blank entry!");
        return;
      }
      if(authorBio.length > 256){
        alert("Author bio should be less than 256 characrters!");
        return;
      }
      const bodyData = {
          "name" : authorName,
          "biography" : authorBio,
      }
  
      ////////////////
      fetch("http://localhost:3000/api/author", {
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
        setAuthorName("")
        setAuthorBio("")
        setAuthorAddStatus("Hello"+ Math.random())
        
      })
      .catch(err => {
  
        alert(err);
      }); 
  
    }
  
    return (
      <>
      <div className='d-flex justify-content-around '>
        <div className='pe-2'>
          <input type="text" 
                name="name" 
                required 
                id="name" 
                className="form-control" 
                value={authorName} 
                onChange={handleAuthorName} 
                placeholder="Type new author name" />
        </div>
        <div className='flex-fill'>
            <textarea className='form-control' 
                        required 
                        name="biography" 
                        id="biography" 
                        value={authorBio} 
                        rows={1}
                        onChange={handleAuthorBio} 
                        placeholder="Provide a short bio about the new author (256 words max)."></textarea>
        </div>
        <div>
          <button className="btn btn-dark ms-2"  onClick={handleAuthorSubmit}>Add Author</button>     
         </div>
  
      </div>
      
      </>   
    )
  }
  
export default Authorform
