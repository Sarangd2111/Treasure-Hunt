import React from "react";
import { Fragment, useState, useContext, useEffect } from "react";
import "../stylesheets/leaderboard.css";
import axios from "axios";
import { AuthContext } from "../context/authContext.js";

const Leaderboard = () => {
  const [leader1, setLeader1] = useState([]);
  const [leader2, setLeader2] = useState([]);
  const [leader3, setLeader3] = useState([]);
  const [leader4, setLeader4] = useState([]);
  const [leader5, setLeader5] = useState([]);
  const [leader6, setLeader6] = useState([]);

  const getLeader1 = async () => {
    try {
      const response1 = await fetch("http://localhost:8800/leaderboard1");
      const jsonData1 = await response1.json();
      setLeader1(jsonData1);

    } catch (err) {
      console.error(err.message);
    }
  };

  const getLeader2 = async()=>{
    try{
        const response2 = await fetch("http://localhost:8800/leaderboard2");
        const jsonData2 = await response2.json();
        setLeader2(jsonData2);
    }
    catch(err){
        console.error(err.message);
    }
  }

  const getLeader3 = async()=>{
    try{
        const response3 = await fetch("http://localhost:8800/leaderboard3");
        const jsonData3 = await response3.json();
        setLeader3(jsonData3);
    }
    catch(err){
        console.error(err.message);
    }
  }

  const getLeader4 = async()=>{
    try{
        const response4 = await fetch("http://localhost:8800/leaderboard4");
        const jsonData4 = await response4.json();
        setLeader4(jsonData4);
    }
    catch(err){
        console.error(err.message);
    }
  }

  const getLeader5 = async()=>{
    try{
        const response5 = await fetch("http://localhost:8800/leaderboard5");
        const jsonData5 = await response5.json();
        setLeader5(jsonData5);
    }
    catch(err){
        console.error(err.message);
    }
  }

  const getLeader6 = async()=>{
    try{
        const response6 = await fetch("http://localhost:8800/leaderboard6");
        const jsonData6 = await response6.json();
        setLeader6(jsonData6);
    }
    catch(err){
        console.error(err.message);
    }

  }

  useEffect(() => {
    getLeader1();
    getLeader2();
    getLeader3();
    getLeader4();
    getLeader5();
    getLeader6();
  }, []);


  const handleSubmit = (e) => {
    
  };

  return (
    <div className="leaderboard">
      <h2> Leaderboard </h2>
      <div className="underline"></div>
      {/* <button
        type="submit"
        id="submit"
        className="form_button"
        onClick={handleSubmit}
      >
        Fetch
      </button> */}

      <h2>Riverside Runway</h2>
    <div className="underline"></div>
      <div className="leadertable">
        <Fragment>
          <table>
            <thead>
              <tr>
                <th>Captain</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leader1.map((leader) => (
                <tr>
                  <td>{leader.username}</td>
                  <td>{leader.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
      <h2>The Giantsbane Skull</h2>
      <div className="underline"></div>
      <div className="leadertable">
      <Fragment>
          <table>
            <thead>
              <tr>
                <th>Captain</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leader2.map((leader) => (
                <tr>
                  <td>{leader.username}</td>
                  <td>{leader.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>

      <h2>Whispering Willowgrove</h2>
      <div className="underline"></div>
      <div className="leadertable">
      <Fragment>
          <table>
            <thead>
              <tr>
                <th>Captain</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leader3.map((leader) => (
                <tr>
                  <td>{leader.username}</td>
                  <td>{leader.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>

      <h2>The Tree's Corner</h2>
      <div className="underline"></div>
      <div className="leadertable">
      <Fragment>
          <table>
            <thead>
              <tr>
                <th>Captain</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leader4.map((leader) => (
                <tr>
                  <td>{leader.username}</td>
                  <td>{leader.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
      <h2>The Peakspire Mountains</h2>
      <div className="underline"></div>
      <div className="leadertable">
      <Fragment>
          <table>
            <thead>
              <tr>
                <th>Captain</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leader5.map((leader) => (
                <tr>
                  <td>{leader.username}</td>
                  <td>{leader.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
      <h2>The Dead End's Shore</h2>
      <div className="underline"></div>
      <div className="leadertable">
      <Fragment>
          <table>
            <thead>
              <tr>
                <th>Captain</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leader6.map((leader) => (
                <tr>
                  <td>{leader.username}</td>
                  <td>{leader.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
      <p style={{textAlign:"center", marginTop:"30px", fontWeight:"1000"}}>You can be here too captain!!....Make Yourself a part of our Leaderboard</p>
    </div>
  );
};

export default Leaderboard;
