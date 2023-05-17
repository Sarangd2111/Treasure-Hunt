import React, { useState , useContext} from 'react'
import '../stylesheets/login.css';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/authContext.js"
const BASE_URL = process.env.REACT_APP_BASE_URL
const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  const [err,setError] = useState(null);
  const navigate = useNavigate()

  const { login } = useContext(AuthContext);

  const handleChange = e=>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  //prevent default used to avoid refreshing
  const handleSubmit = async e=>{
    e.preventDefault()
    try{
     await login(inputs)
     await axios.post(`${BASE_URL}/backend/auth/login`|| `${process.env.PORT}/backend/auth/login` ,   inputs)
     navigate("/");
    }
    catch(err){
      setError(err.response.data);
    }
  }

  return (
    <div className='login'>
        <div id="container">
            <h2>&bull; Login &bull;</h2>
            <div className="underline"></div>
            <form>
                <label htmlFor="username"></label>
                <input type="text" id="username"  name="username" required placeholder="Username" onChange={handleChange}/>
                <input type="password" id="password" name="password" required placeholder="Password" onChange={handleChange}/>
                <button type="submit" id="submit" name="login" className="form_button" onClick={handleSubmit}>Login</button> <br />
                {err && <p className='error'>{err}</p>}
                <span className='errormsg'>Not a Captain yet ?... <br /><Link to='../signup' style={{textDecoration:'none', color:'rgb(80, 36, 3) '}}>Let's go!!</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login
