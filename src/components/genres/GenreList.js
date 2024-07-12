import React from 'react'
import { useEffect, useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import editGenre from '../../utils/editGenre';
import { useNavigate } from "react-router-dom";

function GenreList(props) {
  const navigate = useNavigate();

  let [data, setData] = useState([]);
  let [editId, setEditId] = useState(0);
  let [delStat, setDelStat] = useState(0);
  let [genreName, setGenreName] = useState("");
  let [editStat, setEditStat] = useState(false);

 

  const enableEdit = (id) =>{
    setEditId(editId = id)
  }


 const  getAllGenres = async ()=> {
  
    const responseData = await fetch("http://localhost:3000/api/genre");
   
    const genres =  await responseData.json();

    
    setData(data = genres);
    //console.log(props.sortGenre==1) 
    if (props.sortGenre==1){
      //setData(data = genres);
      sortData(data);
    }
    else if (props.sortGenre==2){
      sortDataReverse(data);
    }
    else{
      setData(data = genres);
    }
  }


  const handleGenreChange = (e)=>{
   
      setGenreName(genreName = e.target.value)
     
      if (genreName==="")
        setEditStat(false);
      else{
        setEditStat(true);
      }
    }
    
   
  const updateGenre = (id) => {

    if(editStat){
        
        if(genreName===""){
          alert("Cannot submit blank entry!");
          return;
        }
        const bodyData = {
            "genre_name" : genreName,
        }

        fetch("http://localhost:3000/api/genre/" + id, {
          method: "PUT",
          body: JSON.stringify(bodyData),
          headers: {"Content-type": 
                    "application/json; charset=UTF-8"},
        })
        .then(response => {
          if (response.ok) {
            setEditId(editId=0);
            setEditStat(editStat=false);
          }
          else{
              throw response;
          }
      }) 
        .catch(err => {
          alert(err);
        }); 
    }
      else{
        setEditId(editId=0);
        setEditStat(editStat=false);}
  }

  const deleteGenre = async (id)=>{
     await fetch('http://localhost:3000/api/genre/' + id, { method: 'DELETE' });
     setDelStat(Math.random())
  }
  
    useEffect(() => { 
      console.log("inside use")
      getAllGenres()
     
    },[ delStat, props, editStat])


  const sortData = (data) =>{
    data.sort(function(a, b) {
      return a.genre_name.localeCompare(b.genre_name);
    });
  }
  const sortDataReverse = (data) =>{
    data.sort(function(a, b) {
      return b.genre_name.localeCompare(a.genre_name);
    });}

    // Getting searched genre name

      let searchedData = data.filter(genre => {
      let genreName = genre.genre_name.toUpperCase();
      let toSearch = props.search.toUpperCase();
      if(genreName.includes(toSearch)){
          return true;
      }
  })


  // Rending Data

    const renderGenres = (genre) => (
      
      <div className='d-flex genretext' key={genre.genre_id}>
         
        {editId == genre.genre_id 
        
      ?

      <div className='d-flex flex-fill justify-content-between mt-1'>
        <div className='flex-fill ms-4 '>
        <input type="text" defaultValue={genre.genre_name} onChange={handleGenreChange} autoFocus name="genre" className='form-control' onBlur={()=>{updateGenre(genre.genre_id)}} />
        </div>
        
      </div>
              
      :
      <div className='d-flex flex-fill justify-content-between mt-1'>
          <div className='flex-fill ms-4 '>{
            genre.genre_name
          }</div>
          <div className='m-1'>
            <AiFillEdit size={20} onClick={()=>{enableEdit(genre.genre_id)}}/>
          </div>
          <div className='m-1'>
            <MdDelete size={20} onClick={()=>{deleteGenre(genre.genre_id)}} />
          </div>
        </div>
      }
      </div>
    );

    return (
    <div>
     {
      props.search 
      ? searchedData.map(genre => renderGenres(genre))
      :   data.map(genre => renderGenres(genre)) 
        
     }
    </div>
  )
}

export default GenreList



