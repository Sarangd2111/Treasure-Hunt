
import '../stylesheets/dead1.css'
import React, { useState } from "react";
import "../stylesheets/clue1.css";
import {  useNavigate } from "react-router-dom";
import "./Homepage.jsx";


const Dead1 = () => {
    const navigate = useNavigate();
    const [answerX, setAnswerX] = useState("");
    const [answerY, setAnswerY] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (answerX == 1 && answerY == 1) {
          alert(
            "You unlocked a new Soft Skill Captain !! : Logical Thinking"
          );
          navigate("/clue3");
        } 
        else {
            alert("You lost Captain !!");
            navigate("/");
          }
      };
    
  return (
    <div className='dead1'>
      <h2>The Phantom Passage's End</h2>
        <p>"Ahh Captain!! Its Phantom's Passage...A Dead End....If we don't find our way out..it will be out fate...Lets get out of here....I know a way....My book has some writings which will guide us...Lets see"</p>
        <p>Hint: Solve the value for X and Y which will give you the co ordinates in which direction to move on....</p>
        <img src={require("../images/sudoku.jpg")} alt="" className='sudokuimg'/>

        <form action="">
        <label htmlFor="answer1"></label>
        <input
          type="text"
          id="answer1"
          name="answerX"
          className="inputclue"
          placeholder="X"
          required
          onChange={(e) => {
            setAnswerX(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          id="answer1"
          name="answerY"
          className="inputclue"
          placeholder="Y"
          required
          onChange={(e) => {
            setAnswerY(e.target.value);
          }}
        /> <br />
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
  )
}

export default Dead1
