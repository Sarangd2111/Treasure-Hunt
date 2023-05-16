import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext.js";

import '../stylesheets/user.css'
const User = () => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:8800/user");
      const jsonData = await response.json();
      setUser(jsonData);

    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
      getUser();
    }, []);

  return (
    <div className='User'>
      <h2>Hello Captain {currentUser.username}</h2>
      <div className="underline"></div>

      <h2 style={{textAlign:"center"}}>Your Stats</h2>
      <div className="underline"></div>

      {/* <p style={{textAlign:"center"}}>Riverside Runway<br />{user.map((user) =>(Score :{user.score} <br />Days :{user.score} <br />Hours : {user.score}<br />Minutes:{user.score} <br /> Seconds : {user.score}<br />))}</p> */}
      <p style={{textAlign:"center"}}>Riverside Runway<br />Score : <br />Days : <br />Hours : <br />Minutes: <br /> Seconds : <br /></p>
      <p style={{textAlign:"center"}}>The Giantsbane Skull<br />Score : <br />Days : <br />Hours : <br />Minutes: <br /> Seconds : <br /></p>
      <p style={{textAlign:"center"}}>Whispering Willogrove<br />Score : <br />Days : <br />Hours : <br />Minutes: <br /> Seconds : <br /></p>
      <p style={{textAlign:"center"}}>The Tree's Corner<br />Score : <br />Days : <br />Hours : <br />Minutes: <br /> Seconds : <br /></p>
      <p style={{textAlign:"center"}}>The Peakspire Mountains<br />Score : <br />Days : <br />Hours : <br />Minutes: <br /> Seconds : <br /></p>
      <p style={{textAlign:"center"}}>The Dead End's Shore<br />Score : <br />Days : <br />Hours : <br />Minutes: <br /> Seconds : <br /></p>


    </div>
  )
}

export default User
