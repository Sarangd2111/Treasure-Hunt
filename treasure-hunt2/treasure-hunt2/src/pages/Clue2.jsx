import React, { useState, useContext } from "react";
import "../stylesheets/clue2.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import axios from "axios";
import {
  calculateEndTime,
  totalTime,
  calculateStartTime,
} from "../components/caluculatetime";
const BASE_URL = process.env.REACT_APP_BASE_URL
// import { clue2 } from "../../../backend/controllers/auth";
let chance = 3;
let score = 0;
const answer = "themap";
const alterAnswer = "map";

const Clue2 = () => {
  const navigate = useNavigate();
  const [answer2, setAnswer2] = useState("");
  const { currentUser, clue2 } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chance === 0) {
      alert("You lost Captain !!");
      navigate("/");
    }
    if (answer2 === answer || answer2 === alterAnswer) {
      alert(
        "You unlocked a new Soft Skill Captain !! : Good Thinking Ability"
      );
      score = chance*100;
      var endTime2 = new Date();
      calculateEndTime(endTime2);
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
        await clue2(inputs);
        await axios.post(`${BASE_URL}/backend/auth/clue2` || `${process.env.PORT}/backend/auth/clue1`, inputs);
        navigate("/clue3");
      } catch (err) {
        // setError(err.response.data);
      }
      var startTime3 = endTime2;
      calculateStartTime(startTime3)
      // navigate("/clue3");
    } else {alert("Wrong choice Captain !!");--chance;}
  };

  return (
    <div className="Clue2">
      <h2> The Giantsbane Skull </h2>
      <div className="underline"></div>
      <p>
        "Great job captain!! The book that we found contains the route to the
        next checkpoint in our treasure hunt!! Lets check it out... "
      </p>
      <p>
        Hint : The link given is a video url which contains the book found by
        you...Read the information from the book and make sure to guess the
        answer correctly!!{" "}
      </p>
      <div className="linkContainer">
        <Link
          to="https://drive.google.com/file/d/1W15ia_szVEqU2hL_XlLruwM5nVpJtPWn/view?usp=share_link"
          target="_blank"
          className="booklink"
        >
          The Book of Doom
        </Link>
        <img src={require("../images/pngegg (2).png")} alt="" width={"70%"} />
      </div>

      <form action="">
        <label htmlFor="answer2"></label>
        <input
          type="text"
          id="answer2"
          name="answer2"
          className="inputclue"
          placeholder="Answer"
          required
          onChange={(e) => {
            setAnswer2(e.target.value.split(" ").join("").toLowerCase());
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

export default Clue2;
