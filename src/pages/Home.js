import React from 'react'
import { Link } from 'react-router-dom'
import { FaPenNib } from "react-icons/fa";

function Home() {
  return (
    <div>
      <h3>Hello Admin!</h3>
      <h5>Assignments</h5>
      <FaPenNib /><Link to="">Books to add/update/delete.</Link><br></br>
      <FaPenNib /><Link to="">Authors to add/update/delete.</Link><br></br>
      <FaPenNib /><Link to="">Genres to add/update/delete.</Link><br></br>

      <h5>Useful resources</h5>
      <FaPenNib /><Link to="">Check this month's global bestsellers.</Link><br></br>
      <FaPenNib /><Link to="">Latest release and reviews.</Link><br></br>
      <FaPenNib /><Link to="">Upcoming this month.</Link>

      <h5>FAQ</h5>
    </div>
  )
}

export default Home
