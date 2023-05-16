import React, { useState, useContext } from "react";
import "../stylesheets/clue6.css";
import { useNavigate ,Link } from "react-router-dom";
import { calculateEndTime, totalTime } from "../components/caluculatetime";
import { AuthContext } from "../context/authContext.js";
import axios from "axios";
let chance = 3;
let score = 0;
const alterAnswer = "treasurekey";
const answer = "key";

const Clue6 = () => {
  const navigate = useNavigate();
  const [answer6, setAnswer6] = useState("");
  const { currentUser, clue6 } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chance === 0) {
      alert("You lost Captain !!");
      navigate("/");
    }
    if (answer6 === answer || answer6 === alterAnswer) {
      alert("You unlocked a new Soft Skill Captain !! : Self Motivated");
      navigate("/finalpage");
      score = chance * 100;
      var endTime6 = new Date();
      calculateEndTime(endTime6);
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
        await clue6(inputs);
        await axios.post("http://localhost:8800/backend/auth/clue6", inputs);
        navigate("/finalpage");
      } catch (err) {
        // setError(err.response.data);
      }
    }else {alert("Wrong choice Captain !!");--chance;}
  };

  return (
    <div className="Clue6">
      <h2>The Dead End's Shore </h2>
      <div className="underline"></div>
      <p>"Finally we reached the dead end's shore captain !!...The night's very dark and we cant proceed till dawn...Lets get some rest under those roofs....Be cautious....The night's haunting....!!"</p>
      <p>Hint: Get into the the house and try finding out an object relevant to get yiu closer to your treasure...</p>
      <img src={require("../images/100_6134 - haunted house  .jpg")} alt="" className="island" /> <br />
      <Link to="https://drive.google.com/file/d/1tDeIMmjvGd5na2N9OvMbog4znjeHHIh6/view?usp=share_link" target="_blank">Get in the house</Link>
      <form action="">
        <label htmlFor="answer1"></label>
        <input
          type="text"
          id="answer1"
          className="inputclue"
          placeholder="Answer"
          required
          onChange={(e) => {
            setAnswer6(e.target.value.split(" ").join("").toLowerCase());
          }}
        />
        <br />
        <button
          type="submit"
          id="submit"
          className="form_button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Clue6;
