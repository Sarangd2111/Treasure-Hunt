import React , {useContext}from 'react'
import Navbar from '../components/Navbar'
import '../stylesheets/home.css'
import { AuthContext } from "../context/authContext.js";
import { Link } from 'react-router-dom';
import {calculateStartTime} from '../components/caluculatetime'


const Homepage = () => {


  const handleSubmit = (e) => {
    // e.preventDefault();
    var startTime1 = new Date();
    
    calculateStartTime(startTime1);
    //  return <Clue1 startTime1 = {startTime1}/>
    
    // console.log(startTime1)
  }

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
        <div className="home">
        <h2 className='heading'>Serene Haven Treasure Hunt</h2>
        <img src={require('../images/closedchest-removebg-preview.png')} alt="" style={{width:"400px", overflowY:"hidden"}}/> <br />
        {currentUser?<button className="form_button"><Link to="/clue1" onClick={handleSubmit}>Play</Link></button>:<button className="form_button"><Link to="/login">Play</Link></button>}
        {/* {currentUser?<button className="form_button"><Link onClick={handleSubmit}>Play</Link></button>:<button className="form_button"><Link to="/login">Play</Link></button>} */}
        <br />
        <br />
        <span className='development'> <Link to="https://sarangd2111.github.io/Portfolio/" target='_blank'>Developed by Sarang Deo</Link> </span>
      </div>
    </div>
  )
}

export default Homepage
