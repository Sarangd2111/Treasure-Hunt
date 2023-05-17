
import "../stylesheets/dead2.css";

import '../stylesheets/dead1.css'
import React, { useState } from "react";
import "../stylesheets/clue1.css";
import {  useNavigate } from "react-router-dom";
import "./Homepage.jsx";
let answer = "air";

const Dead2 = () => {
    const navigate = useNavigate();
  const [answer1, setAnswer1] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answer1 == answer) {
      alert(
        "You unlocked a new Soft Skill Captain !! : Logical Thinking"
      );
      navigate("/clue6");
    } 
    else {
        alert("You lost Captain !!");
        navigate("/");
      }
  };
  return (
    <div className="dead2">
      <h2>The Void's Way</h2>
      <div className="underline"></div>

      <p>
        "oooohhhooo!! Again a dead end...The Void's Way....Here comes the turn
        of my book again...."
      </p>

      <p style={{ textAlign: "center" }}>
        "In shadows I dance, elusive and sly,
        <br />
        A creature of night, I swiftly fly. <br /> <br />
        Whispers of fear, I bring on the breeze,
        <br />
        As I pass through the trees, with eerie ease. <br />
        <br />
        Everything I fill , including the VOID, <br />
        Spread around the world far and wide."
      </p>
      <form action="">
        <label htmlFor="answer1"></label>
        <input
          type="text"
          id="answer1"
          name="answer"
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

export default Dead2;
