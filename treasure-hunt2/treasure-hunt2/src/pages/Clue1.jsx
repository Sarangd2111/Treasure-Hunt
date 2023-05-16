import React, { useState, useContext } from "react";
import "../stylesheets/clue1.css";
import { Link, useNavigate } from "react-router-dom";
import "./Homepage.jsx";
import "../components/caluculatetime";
import { AuthContext } from "../context/authContext.js";
import axios from "axios";
import {
  calculateEndTime,
  totalTime,
  calculateStartTime,
} from "../components/caluculatetime";

const answer = "book";

let score = 0;

let chance = 3;
const Clue1 = (props) => {
  // const { clue1 } = useContext(AuthContext);
  const navigate = useNavigate();
  const [answer1, setAnswer1] = useState("");
  const { currentUser, clue1 } = useContext(AuthContext);
  const [err,setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chance === 0) {
      alert("You lost Captain !!");
      navigate("/");
    }

    // let answer1 = e.target.value.split(" ").join("").toLowerCase();
    if (answer1 === answer) {
      alert(
        "You unlocked a new Soft Skill Captain !! : Good Observational Mind"
      );
      score = chance * 100;
      var endTime1 = new Date();
      var startTime2 = endTime1;
      calculateEndTime(endTime1);
      var timeDets = totalTime();
      var object = {
        username: currentUser?.username ,
        score: score,
        days: timeDets.days,
        hours: timeDets.hours,
        minutes: timeDets.minutes,
        seconds: timeDets.seconds,
      };
      const inputs = object;
      // console.log(inputs);
      try {
        await clue1(inputs);
        await axios.post("http://localhost:8800/backend/auth/clue1", inputs);
        navigate("/clue2");
      } catch (err) {
        // setError(err.response.data);
      }

      calculateStartTime(startTime2);
      // navigate("/clue2");
    } else {alert("Wrong choice Captain !!");--chance;}
  };

  return (
    <div className="Clue1">
      <h2> Riverside Runway </h2>
      <div className="underline"></div>
      <p>
        " Ahh Captain!! I wrote the details about the route to the treasure
        somewhere... and the good news is I lost that thing too... please help
        me finding it... I am sure that I dropped it somewhere here.... "
      </p>
      <p>
        Hint: You have to find the object hidden in the given image and name it
        in the given input field...
      </p>
      <img src={require("../images/island.jpg")} alt="" className="island" />
      <form action="">
        <label htmlFor="answer1"></label>
        <input
          type="text"
          id="answer1"
          name="answer1"
          className="inputclue"
          placeholder="Answer"
          required
          onChange={(e) => {
            setAnswer1(e.target.value.split(" ").join("").toLowerCase());
          }}
        />
        <br />
        <button
          type="submit"
          id="submit"
          name="submit"
          className="form_button"
          onClick={handleSubmit}
          required
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Clue1;
