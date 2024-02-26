import React from "react";
import github from "./images/github.png";
import "./Videos.css";
function Videos() {
  return (
    <>
      <div className="container">
        <img className="vid-img" src={github} />

        <div className="info">
          <img className="logo" src={github} />
          <div className="txt-container">
            <h3 className="title">Snooker moments</h3>
            <p className="youtuber">Snooker hub</p>
            <div className="duration">
              <p className="views">482k views</p>
              <p className="time">1 month ago </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
