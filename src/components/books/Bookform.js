import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useFetch from '../../utils/useFetch';

function Bookform({setBookAddStatus}) {
    const [gdata, setGdata] = useState([]);
    const [adata, setAdata] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [image, setImage] = useState(null);
    const [authorId, setAuthorId] = useState("");
    const [genreId, setGenreId] = useState(""); 

    useEffect(() => {
        getAllGenres();
        getAllAuthors();
    }, []);

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

    const handleImageFile =(e)=>{
        
        setImage(e.target.files[0]);            
    }

    const handleBookSubmit = () => {
        if(title==="" || price==="" || publicationDate==="" || image==="" || authorId=="" || genreId==""){
            alert("Incomplete form cannot be submitted!")
            return;
        }
    //     let bodyData = {
    //         "title": title,
    //         "price": parseFloat(price),
    //         "publication_date": Date.parse(publicationDate),
    //         //"image": image,
    //         "author_id": parseInt(authorId),
    //         "genre_id": parseInt(genreId),
    //         image,
    //     }
    //     console.log(bodyData);
    //     ////////////////
    //   fetch("http://localhost:3000/api/book", {
    //     method: "POST",
    //     body: JSON.stringify(bodyData),
    //     headers: {"Content-type": 
    //               "application/json; charset=UTF-8"},
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //     response.json()}
    //     else{
    //         throw new Error('Error encountered during submission.!');
    //     }
    // }) 
    //   .then(json => {
    //     setTitle("")
    //     setPrice("")
    //     setPublicationDate("")
    //     setImage(null)
    //     setAuthorId("")
    //     setGenreId("")
    //     setBookAddStatus("Hello"+ Math.random())
        
    //   })
    //   .catch(err => {
  
    //     alert(err);
    //   }); 
    // };

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("price", price);
    formdata.append("publication_date", publicationDate);
    formdata.append("author_id", authorId);
    formdata.append("genre_id", genreId);
    formdata.append("image", image);
    
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    
    fetch("http://localhost:3000/api/book", requestOptions)
      .then((response) => response.text())
      .then((result) => {console.log(result)
        setTitle("")
        setPrice("")
        setPublicationDate("")
        setImage(null)
        setAuthorId("")
        setGenreId("")
        setBookAddStatus("Hello"+ Math.random())
      })
      .catch((error) => console.error(error));}

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        New Book Form...
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className='d-flex row mb-1'>
                            <div className='d-flex col-sm-6'>
                                <div className='label col-sm-4'>
                                    Book Name &nbsp;&nbsp;
                                </div>
                                <div className=' col-sm-8'>
                                    <input type='text'
                                        name='title'
                                        className='inputfield'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />
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
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)} />
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
                                        value={publicationDate}
                                        onChange={(e) => setPublicationDate(e.target.value)} />
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
                                        
                                        onChange={handleImageFile} />
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
                                <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={adata}
                                        getOptionLabel={(option) => option.name}
                                        sx={{ width: '225px',
                                            '& .MuiInputBase-root': {
                                                height: '32px', // Adjust input height as needed
                                               
                                            },}}
                                        value={adata.find((option) => option.author_id === authorId) || null}
                                        onChange={(event, newValue) => {
                                            setAuthorId(newValue ? newValue.author_id : null);
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
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={gdata}
                                        getOptionLabel={(option) => option.genre_name}
                                        sx={{ width: '225px',
                                            '& .MuiInputBase-root': {
                                                height: '32px', // Adjust input height as needed
                                               
                                            },}}
                                        value={gdata.find((option) => option.genre_id === genreId) || null}
                                        onChange={(event, newValue) => {
                                            setGenreId(newValue ? newValue.genre_id : null);
                                        }}
                                        renderInput={(params) => <TextField  {...params}  />}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button className='btn btn-warning' onClick={handleBookSubmit}>Add new book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bookform;

////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// function Bookform({ setBookAddStatus }) {
//     const [gdata, setGdata] = useState([]);
//     const [adata, setAdata] = useState([]);
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState("");
//     const [publicationDate, setPublicationDate] = useState("");
//     const [image, setImage] = useState(null); // Use null to represent no image selected
//     const [authorId, setAuthorId] = useState("");
//     const [genreId, setGenreId] = useState("");

//     useEffect(() => {
//         getAllGenres();
//         getAllAuthors();
//     }, []);

//     const getAllGenres = async () => {
//         try {
//             const responseData = await fetch("http://localhost:3000/api/genre");
//             setGdata(await responseData.json());
//         } catch (error) {
//             console.error('Error fetching genres:', error);
//         }
//     };

//     const getAllAuthors = async () => {
//         try {
//             const responseData = await fetch("http://localhost:3000/api/author");
//             setAdata(await responseData.json());
//         } catch (error) {
//             console.error('Error fetching authors:', error);
//         }
//     };

//     const handleImageFile = (e) => {
//         setImage(e.target.files[0]); // Store the File object directly
//     };

//     const handleBookSubmit = () => {
//         if (!title || !price || !publicationDate || !image || !authorId || !genreId) {
//             alert("Incomplete form cannot be submitted!");
//             return;
//         }

//         let formData = new FormData();
//         formData.append("title", title);
//         formData.append("price", parseFloat(price));
//         formData.append("publication_date", Date.parse(publicationDate));
//         formData.append("image", image); // Append the File object directly
//         formData.append("author_id", parseInt(authorId));
//         formData.append("genre_id", parseInt(genreId));

//         console.log(formData)

//         fetch("http://localhost:3000/api/book", {
//             method: "POST",
//             body: formData,
//         })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Error encountered during submission.');
//             }
//         })
//         .then(json => {
//             // Reset form fields and update status
//             setTitle("");
//             setPrice("");
//             setPublicationDate("");
//             setImage(null); // Reset file input state
//             setAuthorId("");
//             setGenreId("");
//             setBookAddStatus("Book added successfully.");
//         })
//         .catch(err => {
//             alert(err);
//         }); 
//     };

//     return (
//         <div className="accordion" id="accordionExample">
//             <div className="accordion-item">
//                 <h2 className="accordion-header">
//                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                         New Book Form...
//                     </button>
//                 </h2>
//                 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                     <div className="accordion-body">
//                         <div className='d-flex row mb-1'>
//                             <div className='d-flex col-sm-6'>
//                                 <div className='label col-sm-4'>
//                                     Book Name &nbsp;&nbsp;
//                                 </div>
//                                 <div className=' col-sm-8'>
//                                     <input type='text'
//                                         name='title'
//                                         className='inputfield'
//                                         value={title}
//                                         onChange={(e) => setTitle(e.target.value)} />
//                                 </div>
//                             </div>
//                             <div className='d-flex col-sm-6'>
//                                 <div className='label col-sm-4'>
//                                     Price in INR &nbsp;&nbsp;
//                                 </div>
//                                 <div className='col-sm-8'>
//                                     <input type='text'
//                                         name='price'
//                                         className='inputfield'
//                                         value={price}
//                                         onChange={(e) => setPrice(e.target.value)} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='d-flex row mb-1'>
//                             <div className='d-flex col-sm-6'>
//                                 <div className='label col-sm-4'>
//                                     Publication Date &nbsp;&nbsp;
//                                 </div>
//                                 <div className='col-sm-8'>
//                                     <input type='date'
//                                         className='inputfield'
//                                         name='publication_date'
//                                         value={publicationDate}
//                                         onChange={(e) => setPublicationDate(e.target.value)} />
//                                 </div>
//                             </div>
//                             <div className='d-flex col-sm-6'>
//                                 <div className='label col-sm-4'>
//                                     Image &nbsp;&nbsp;
//                                 </div>
//                                 <div className='col-sm-8'>
//                                     <input type='file'
//                                         className='inputfield'
//                                         name='image'
//                                         onChange={handleImageFile} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='d-flex row mb-1'>
//                             <div className='d-flex col-sm-6'>
//                                 <div className='label col-sm-4'>
//                                     Author &nbsp;&nbsp;
//                                 </div>
//                                 <div className='col-sm-8'>
//                                     <Autocomplete
//                                         disablePortal
//                                         id="combo-box-demo"
//                                         options={adata}
//                                         getOptionLabel={(option) => option.name}
//                                         sx={{ width: '225px',
//                                             '& .MuiInputBase-root': {
//                                                 height: '32px', // Adjust input height as needed
//                                             },
//                                         }}
//                                         value={adata.find((option) => option.author_id === authorId) || null}
//                                         onChange={(event, newValue) => {
//                                             setAuthorId(newValue ? newValue.author_id : null);
//                                         }}
//                                         renderInput={(params) => <TextField {...params} />}
//                                     />
//                                 </div>
//                             </div>
//                             <div className='d-flex col-sm-6'>
//                                 <div className='label col-sm-4'>
//                                     Genre &nbsp;&nbsp;
//                                 </div>
//                                 <div className='col-sm-8'>
//                                     <Autocomplete
//                                         disablePortal
//                                         id="combo-box-demo"
//                                         options={gdata}
//                                         getOptionLabel={(option) => option.genre_name}
//                                         sx={{ width: '225px',
//                                             '& .MuiInputBase-root': {
//                                                 height: '32px', // Adjust input height as needed
//                                             },
//                                         }}
//                                         value={gdata.find((option) => option.genre_id === genreId) || null}
//                                         onChange={(event, newValue) => {
//                                             setGenreId(newValue ? newValue.genre_id : null);
//                                         }}
//                                         renderInput={(params) => <TextField {...params} />}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='d-flex justify-content-center mt-3'>
//                             <button className='btn btn-warning' onClick={handleBookSubmit}>Add new book</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Bookform;
