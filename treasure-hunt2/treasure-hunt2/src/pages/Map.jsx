import React from "react";
import "../stylesheets/map.css";
const Map = () => {
  return (
    <div className="Map">
      <h2> Map </h2>
      <div className="underline"></div>
      <div className="linkContainer">
        <img src={require("../images/map.png")} alt="" width={"80%"} />
      </div>
    </div>
  );
};

export default Map;
