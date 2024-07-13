import React, {useReducer} from 'react'

function Bookform() {

    const initialValues = {
        title: '',
        price: '',
        publication_date: '',
        image: '',
        author_id: '',
        genre_id: '',
    }


    const [formValues, setFormValues] = useReducer(
        (curVals, newVals) => ({ ...curVals, ...newVals }), initialValues
    )

    const { title, price, publication_date, image, author_id, genre_id } = formValues;

    function handleFormChange(e) {
        const { name, value } = e.target;
        setFormValues({ [name] : value})
        console.log(formValues)
    }

    const handleBookSubmit = () =>{
        

    }

  return (
    <>
    <div class="accordion" id="accordionExample">
    
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        New Book Form...
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {/* ---------------------------------------------- */}
        
        <div className='d-flex row mb-1' >
            <div className='d-flex col-sm-6' >
                <div className='label col-sm-4' >
                    Book Name &nbsp;&nbsp;
                </div>
                <div className='col-sm-8' >
                    <input type='text'
                        name='title'
                        className='inputfield'
                        value={title}
                        onChange={handleFormChange} />
                </div>
            </div>

            <div className='d-flex col-sm-6'>
                <div className='label  col-sm-4'>
                    Price in INR &nbsp;&nbsp;
                </div>
                <div className='col-sm-8'>
                    <input type='text'
                        name='price'
                        className='inputfield '
                        value={price}
                        onChange={handleFormChange} />
                </div>
            </div>
        </div>
        {/* ------ */}
        <div className='d-flex row mb-1'>
        <div className='d-flex col-sm-6'>
            <div className='label col-sm-4'>
                Publication Date &nbsp;&nbsp;
            </div>
            <div className='col-sm-8'>
                <input type='date'
                    className='inputfield '
                    name='publication_date'
                    value={publication_date}
                    onChange={handleFormChange} />
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
                    value={image}
                    onChange={handleFormChange} />
            </div>
        </div>
        </div>

        {/* ------- */}

        <div className='d-flex  row mb-1'>
        <div className='d-flex col-sm-6'>
            <div className='label col-sm-4'>
                Author &nbsp;&nbsp;
            </div>
            <div className='col-sm-8'>
                <input type='text'
                    className='inputfield'
                    name='author_id'
                    value={author_id}
                    onChange={handleFormChange} />
            </div>
        </div>

        <div className='d-flex col-sm-6'>
            <div className='label col-sm-4'>
                Genre &nbsp;&nbsp;
            </div>
            <div className='col-sm-8'>
                <input type='text'
                    className='inputfield'
                    name='genre_id'
                    value={genre_id}
                    onChange={handleFormChange} />
            </div>
        </div>
        </div>
        <div className='d-flex justify-content-center mt-3'>
            <button className='btn btn-warning' onClick={()=>handleBookSubmit} >Add new book</button>
        </div>
      </div>

        {/* ---------------------------------------------- */}
      </div>
    </div>
  </div>
   
    </>
  )
}

export default Bookform
