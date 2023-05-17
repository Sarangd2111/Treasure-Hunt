import React, {useState, useContext } from 'react'
import '../stylesheets/clue5.css'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import axios from "axios";
import {
  calculateEndTime,
  totalTime,
  calculateStartTime,
} from "../components/caluculatetime";
const BASE_URL = process.env.REACT_APP_BASE_URL
const answer = "theforsakenlands"
let chance = 3;
let score = 0;
const alterAnswer = "forsakenlands";


const Clue5 = () => {
  const navigate = useNavigate();
  const [answer5, setAnswer5] = useState("");    
  const { currentUser, clue5 } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chance === 0) {
      alert("You lost Captain !!");
      navigate("/");
    }
    if (answer5 === answer || answer5 === alterAnswer) {
      alert(
        "You unlocked a new Soft Skill Captain !! : Critical Thinking"
      );
      score = chance*100;
      var endTime5 = new Date();
      calculateEndTime(endTime5);
      var timeDets = totalTime();
      var object = {
        username: currentUser?.username,
        score: score,
        days: timeDets.days,
        hours: timeDets.hours,
        minutes: timeDets.minutes,
        seconds: timeDets.seconds,
      };
      const inputs = object;
      // console.log(inputs);
      try {
        await clue5(inputs);
        await axios.post(`${BASE_URL}/backend/auth/clue5` || `${process.env.PORT}/backend/auth/clue1`, inputs);
        navigate("/clue6");
      } catch (err) {
        // setError(err.response.data);
      }
      var startTime6 = endTime5;
      calculateStartTime(startTime6)
      // navigate("/clue6");
    } else {alert("Wrong choice Captain !!");--chance;}
  };

  return (
    <div className='Clue5'>
      <h2>The Peakspire Mountains </h2>
      <div className="underline"></div>
      <p>"Oh!! Look Captain!!....what I found !!...A parchment....Grab it up...the winds here are very strong....Make sure it will not fly away...!! "</p>
      <h2> &bull; The Parchment &bull;</h2>
       <p className='parchment'> In search of treasures, bold and brave, <br />
        Across the map, an adventure paved. <br />
        Scaling peaks with courage anew, <br />
        Reaching heights with a breathtaking view. <br /> <br />

        Beyond the mountains, a realm unfolds, <br />
        Where tales are whispered, secrets untold. <br />
        Where lost souls wander, forever roam, <br />
        A place forgotten, known as their home. <br /><br />

        In this place forsaken, answers lie, <br />
        A riddle to solve, to reach the sky. <br />
        Tell me, traveler, if you dare, <br />
        What land awaits beyond that rarefied /air? <br /><br />

        Climb high, cross far, with sturdy hands,  <br />
        And you shall find the .... </p>
      <form action="">
        <label htmlFor="answer1"></label>
        <input
          type="text"
          id="answer1"
          className="inputclue"
          placeholder="Answer"
          required
          onChange={(e) => {
            setAnswer5(e.target.value.split(" ").join("").toLowerCase());
          }}
        />
        <br />
        <button type="submit" id="submit" className="form_button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Clue5
