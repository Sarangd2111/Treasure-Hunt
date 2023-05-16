import React from 'react'
import '../stylesheets/winpage.css'
import { Link } from 'react-router-dom'
const Winpage = () => {
  return (
    <div className='Winpage'>
      <p>Hurraaayyy Captain!! You made it!!....Finally we solved out the mystery of the old forbidden serene haven island's treasure</p>
      <h2>The Serene Haven Island Treasure </h2>
      <div className="underline"></div>
      <img src={require("../images/treasure.png")} alt="" /> <br />
      <button className='form_button'><Link to="/">Home</Link> </button>
    </div>
  )
}

export default Winpage
