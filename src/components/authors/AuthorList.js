import React from 'react'
import { useEffect, useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";


function AuthorList(props) {

    let [data, setData] = useState([]);
    let [editId, setEditId] = useState(0);
    let [delStat, setDelStat] = useState(0);
    let [authorName, setAuthorName] = useState("");
    let [authorBio, setAuthorBio] = useState("");
    let [editStat, setEditStat] = useState(false);

    const enableEdit = (id) =>{
        setEditId(editId = id)
      }

    const  getAllAuthors = async ()=> {

    const responseData = await fetch("http://localhost:3000/api/author");
    
    const authors =  await responseData.json();

    
    setData(data = authors);
    
    if (props.sortAuthor==1){
        
        sortData(data);
    }
    else if (props.sortAuthor==2){
        sortDataReverse(data);
    }
    else{
        setData(data = authors);
    }
    }

    const sortData = (data) =>{
        data.sort(function(a, b) {
          return a.name.localeCompare(b.name);
        });
      }
      const sortDataReverse = (data) =>{
        data.sort(function(a, b) {
          return b.name.localeCompare(a.name);
        });}


        const handleNameChange = (e)=>{
   
            setAuthorName(authorName = e.target.value)
            checkEditStatus();

            // if (authorName==="")
            //   setEditStat(false);
            // else{
            //   setEditStat(true);
            // }
          }

          const handleBioChange = (e)=>{
   
            setAuthorBio(authorBio = e.target.value)
            checkEditStatus();
            // if (authorBio==="")
            //   setEditStat(false);
            // else{
            //   setEditStat(true);
            // }
          }
        
        const checkEditStatus = ()=>{
            if (authorBio==="" && authorName==="")
                setEditStat(false);
              else{
                setEditStat(true);
              }
        }
         
        const updateAuthor = (id, name, bio) => {
      
          if(editStat){
              
              if(authorName===""){
                setAuthorName(authorName=name)
              }
              if(authorBio===""){
                setAuthorBio(authorBio=bio)
              }
              const bodyData = {
                  "name" : authorName,
                  "biography" : authorBio,
              }
              console.log(bodyData)
              fetch("http://localhost:3000/api/author/" + id, {
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
      
        const deleteAuthor = async (id)=>{
           await fetch('http://localhost:3000/api/author/' + id, { method: 'DELETE' });
           setDelStat(Math.random())
        }
        
          useEffect(() => { 
            
            getAllAuthors()
           
          },[ delStat, props, editStat])
      
      // Getting searched genre name

      let searchedData = data.filter(author => {
        let authorName = author.name.toUpperCase();
        let authorBio = author.biography.toUpperCase();
        let toSearch = props.search.toUpperCase();
        if(authorName.includes(toSearch) || authorBio.includes(toSearch)){
            return true;
        }
    })


    // Rending Data

    const renderAuthor = (author) => (
      
        <div className='genretext' key={author.author_id}>
           
          {editId == author.author_id 
          
        ?
  
        // <div className='d-flex flex-fill justify-content-between mt-1'>
        //   <div className='flex-fill ms-4 '>
        //   <input type="text" defaultValue={author.name} onChange={handleNameChange} autoFocus name="author" className='form-control'  />
        //   {/* onBlur={()=>{updateAuthor(genre.genre_id)}} */}
        //   </div>
          
        // </div>

        <div className='row mt-4'>
            <div className='col-sm-2 '>
                <input type="text" defaultValue={author.name} size={6} onChange={handleNameChange}  name="author" className='form-control '  />
            </div>
            <div className='col-sm-8 '>
                <textarea defaultValue={author.biography} onChange={handleBioChange} name="bio" className='form-control' ></textarea>
                
            </div>
            <div className='col-sm-1'>
                <IoCheckmarkDoneCircle size={25} color='green' onClick={()=>{updateAuthor(author.author_id, author.name, author.biography)}}/>
            </div>
            <div className='col-sm-1'>
                <MdCancel size={25} color='red' onClick={()=>{setEditId(editId=0)}} />
            </div>
        </div>
                
        :
        <div className='row mt-4'>
            <div className='col-sm-2 '>
                {author.name}
            </div>
            <div className='col-sm-8 '>
                {author.biography}
            </div>
            <div className='col-sm-1'>
                <AiFillEdit size={20} onClick={()=>{enableEdit(author.author_id)}}/>
            </div>
            <div className='col-sm-1'>
                <MdDelete size={20} onClick={()=>{deleteAuthor(author.author_id)}} />
            </div>
        </div>
        // <div className='d-flex flex-fill justify-content-between mt-1'>
        //     <div className='flex-fill ms-4 '>{
        //       genre.genre_name
        //     }</div>
        //     <div className='m-1'>
        //       <AiFillEdit size={20} onClick={()=>{enableEdit(genre.genre_id)}}/>
        //     </div>
        //     <div className='m-1'>
        //       <MdDelete size={20} onClick={()=>{deleteGenre(genre.genre_id)}} />
        //     </div>
        //   </div>
        }
        </div>
      );
  

  return (
    <div>
     {
      props.search 
      ? searchedData.map(author => renderAuthor(author))
      :   data.map(author => renderAuthor(author)) 
        
     }
    </div>
  )
}

export default AuthorList
