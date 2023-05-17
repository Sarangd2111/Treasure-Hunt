import React, { useState, useContext } from "react";
import "../stylesheets/clue4.css";
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
const alterAnswer = "thepeakspiremountains";
const answer = "peakspiremountains";

const Clue4 = () => {
  const navigate = useNavigate();
  const [answer4, setAnswer4] = useState("");
  const { currentUser, clue4 } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chance === 0) {
      alert("You lost Captain !!");
      navigate("/");
    }
    if (answer4 === answer || answer4 === alterAnswer) {
      alert(
        "You unlocked a new Soft Skill Captain !! : Problem Solving Skills"
      );
      score = chance*100;
      var endTime4 = new Date();
      calculateEndTime(endTime4);
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
        await clue4(inputs);
        await axios.post(`${BASE_URL}/backend/auth/clue4` || `${process.env.PORT}/backend/auth/clue1`, inputs);
        navigate("/clue5");
      } catch (err) {
        // setError(err.response.data);
      }
      var startTime5 = endTime4;
      calculateStartTime(startTime5)
      // navigate("/clue5");
    } else {alert("Wrong choice Captain !!");--chance;}
  };

  return (
    <div className="Clue4">
      <h2> Celestia Elderwood Tree </h2>
      <div className="underline"></div>
      <p>
        <h2>&bull; The Story &bull;</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deep within the heart of a mystical
        forest, shrouded in legends and whispered tales, stood the majestic
        Celestia Elderwood tree. Its towering form reached towards the heavens,
        its branches adorned with leaves that glistened like silver under the
        moonlight. This revered tree was said to hold the key to a fabled
        treasure of unimaginable worth. Generations had passed, each hearing
        fragments of the fabled tale, yet none had been able to decipher the
        clues that would lead them to the Celestia Elderwood's hidden treasure.
        It was said that the tree possessed ancient knowledge, embedded within
        its roots and whispered through its leaves. The treasure hunters of the
        land were captivated by the challenge and allure of unlocking the
        secrets held by the celestial guardian. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rumours spread like wildfire as news of a
        grand treasure hunt reached the ears of adventurers far and wide.
        Seekers from every corner of the realm flocked to the forest, each armed
        with their own set of clues, ancient maps, and riddles passed down
        through the generations. Among the brave treasure hunters was a young
        captain named Lucius. He possessed a deep fascination with the Celestia
        Elderwood and had spent years studying its legends and lore. Lucius was
        convinced that he held the key to unravelling the mysteries surrounding
        the Celestia Elderwood's treasure. With unwavering determination, Lucius
        embarked on a perilous journey into the heart of the enchanted forest.
        Armed with his map, riddles, and a sense of adventure, he ventured
        deeper into the maze of towering trees and hidden pathways. As Lucius
        neared the Celestia Elderwood, the atmosphere changed. The air seemed to
        shimmer with an otherworldly energy, and the soft whispers of the wind
        carried cryptic messages that danced through the leaves. He deciphered
        the clues, following the path illuminated by the celestial light
        filtering through the canopy. One thing Lucius knew about the tree was
        it tells the upcoming mystery to be travelled through to grab the
        treasure. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Finally, Lucius stood before the Celestia
        Elderwood, the epicenter of his quest. He took a deep breath, grounding
        himself in the moment, and approached the tree with reverence. As he
        gently placed his hand upon the bark, a surge of celestial energy
        coursed through his veins, confirming his arrival at the treasure's
        threshold. The Celestia Elderwood acknowledged Lucius as the true
        seeker, and the surrounding forest seemed to come alive, guiding him
        further along the treasure's trail. An echoed voice came from the tree
        depicting a clue for Lucius to the treasure.
      </p>

      <p className="riddle">
        "Crossing the banks of Riverside runway,
        <br />
        Seeking for the wealth first you have to pay, <br />
        Making a way through giantsbane skull scum. <br />
        You have to go through the mysteries yet to come. <br />
        <br />
        Within your bag, a treasure that you hold, <br />
        A map or a book, a story waiting to unfold. <br />
        Filled with paths unknown, <br />
        Adventure beckons, to lands yet shown. <br />
        <br />  
        Majestic heights, where eagles soar, <br />
        In nature's embrace, I proudly roar. <br />
        Clad in rocky armor, a sight to behold, <br />
        Where climbers seek adventures untold !! "
      </p>

      <form action="">
        <label htmlFor="answer1"></label>
        <input
          type="text"
          id="answer1"
          className="inputclue"
          placeholder="Answer"
          required
          onChange={(e) => {
            setAnswer4(e.target.value.split(" ").join("").toLowerCase());
          }}
        />
        <br />
        <button type="submit" id="submit" className="form_button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default Clue4;
