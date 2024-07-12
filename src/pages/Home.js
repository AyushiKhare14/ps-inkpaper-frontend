import React from 'react'
import { Link } from 'react-router-dom'
import { FaPenNib } from "react-icons/fa";

function Home() {
  return (
    <div className='homepage'>
      <h3>Hello Admin!</h3>
      <small>"A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors." – Charles Baudelaire</small>

      <div className='mt-4'>
      <h5>Assignments</h5>
      <FaPenNib />&nbsp;&nbsp;<Link to="">Books to add/update/delete.</Link><br></br>
      <FaPenNib />&nbsp;&nbsp;<Link to="">Authors to add/update/delete.</Link><br></br>
      <FaPenNib />&nbsp;&nbsp;<Link to="">Genres to add/update/delete.</Link><br></br>
      <br></br>
      <h5>Useful resources</h5>
      <FaPenNib />&nbsp;&nbsp;<Link to="">Checkout this years's global bestsellers.</Link><br></br>
      <FaPenNib />&nbsp;&nbsp;<Link to="">Latest release and reviews.</Link><br></br>
      <FaPenNib />&nbsp;&nbsp;<Link to="">Upcoming this month.</Link><br></br>
      <FaPenNib />&nbsp;&nbsp;<Link to="">Regional and local publishes.</Link><br></br>
      <br></br>
      <h5>FAQ</h5>
      <FaPenNib />&nbsp;&nbsp;<Link to="">Frequently asked questions about the admin portal.</Link>
      </div>
    </div>
  )
}

export default Home
