
function submitGenres(bodyData){
   

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
 
        //alert("Genre Added Successfully");
      })
      .catch(err => {

        alert(err);
      }); 
}

export default submitGenres