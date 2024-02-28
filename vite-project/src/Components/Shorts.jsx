import React from "react";
import cric from "./images/Kohli.jpg";
import "./Shorts.css";
function Shorts() {
  return (
    <>
      <div className="shorts-container">
        <img className="shorts-img" src={cric} />

        <h4 className="shorts-title">Hi I am Kohli</h4>

        <p className="shorts-views">2M views</p>
      </div>
    </>
  );
}

export default Shorts;
