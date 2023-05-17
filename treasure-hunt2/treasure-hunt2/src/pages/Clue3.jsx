import React, { useState, useContext } from "react";
import "../stylesheets/clue2.css";
import "../stylesheets/clue3.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import axios from "axios";
import {
  calculateEndTime,
  totalTime,
  calculateStartTime,
} from "../components/caluculatetime";
const BASE_URL = process.env.REACT_APP_BASE_URL
let chance = 3;
let score = 0;
const alterAnswer = "celestiaelderwoodtree";
const answer = "celestiaelderwood";

const Clue2 = () => {

  const navigate = useNavigate();
  const [answer3, setAnswer3] = useState("");
  const { currentUser, clue3 } = useContext(AuthContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chance === 0) {
      alert("You lost Captain !!");
      navigate("/dead1");
    }
    if (answer3 === answer || answer3 === alterAnswer) {
      alert(
        "You unlocked a new Soft Skill Captain !! : Problem Solving Skills"
      );
      score = chance * 100;
      var endTime3 = new Date();
      calculateEndTime(endTime3);
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
        await clue3(inputs);
        await axios.post(`${BASE_URL}/backend/auth/clue3` || `${process.env.PORT}/backend/auth/clue1`, inputs);
        navigate("/clue4");
      } catch (err) {
        // setError(err.response.data);
      }
      var startTime4 = endTime3;
      calculateStartTime(startTime4);
      // navigate("/clue4");
    } else {alert("Wrong choice Captain !!");--chance;}
  };

  return (
    <div className="Clue3">
      <h2> Whispering Willowgrove </h2>
      <div className="underline"></div>
      <p>
        "Aye Captain!! You are right...the map is the only way....Lets check it
        out and try to find out something which might take us to the next
        checkpoint....Captain, I think the map wants us to tell about the next
        checkpoints....Now we are in the Whispering Willowgrove forest, Lets
        have a look onto the further ones...."
      </p>
      <p>
        Hint : Read the map carefully...Find out the posible place for rest
        where you will get fruits, fire and fidelity.
      </p>
      <div className="linkContainer">
        <h2> Map </h2>
        <div className="underline"></div>
        <img src={require("../images/map.png")} alt="" width={"100%"} />
      </div>

      <form action="">
        <label htmlFor="answer1"></label>
        <input
          type="text"
          id="answer1"
          className="inputclue"
          placeholder="Answer"
          required
          onChange={(e) => {
            setAnswer3(e.target.value.split(" ").join("").toLowerCase());
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

export default Clue2;
