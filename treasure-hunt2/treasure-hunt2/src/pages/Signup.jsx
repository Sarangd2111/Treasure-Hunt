import React, { useState } from "react";
import "../stylesheets/signup.css";
import axios from "axios"

import {Link, useNavigate} from "react-router-dom"
const BASE_URL = process.env.REACT_APP_BASE_URL
const Signup = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
    age:"",
    mobile:"",
    email:"",
  })

  const [err,setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = e=>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  //prevent default used to avoid refreshing
  const handleSubmit = async e=>{
    e.preventDefault()
    try{
     await axios.post(`${BASE_URL}/backend/auth/signup`|| `${process.env.PORT}/backend/auth/signup` , inputs)
     navigate("/login");
    }
    catch(err){
      setError(err.response.data);
    }
  }

  // console.log(inputs)
  return (
    <div className="auth">
      <div id="container">
        <h2>&bull; Sign-Up &bull;</h2>
        <div className="underline"></div>
        <form>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
            onChange={handleChange}
          />
          <label htmlFor="age"></label>
          <input
            type="number"
            id="age"
            name="age"
            required
            placeholder="Age"
            onChange={handleChange}
          />
          <label htmlFor="mobile"></label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            placeholder="Mobile"
            onChange={handleChange}
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="passid"></label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
          />
          <button
            type="submit"
            name="signup"
            className="form_button"
            onClick={handleSubmit}
          >
            Signup
          </button>
         {err && <p className='error'>{err}</p>}
          <br />
         <span className='errormsg'>Already a Captain?... <br /> <Link to='../login' style={{textDecoration:'none', color:'rgb(80, 36, 3) '}}>Let's not wait till dawn!! </Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
