import React from "react";
import "./Videos.css";
function Videos(props) {
  return (
    <>
      <div className="container">
        <img className="vid-img" src={props.img} />

        <div className="info">
          <img className="logo" src={props.logo} />
          <div className="txt-container">
            <h4 className="title">{props.title}</h4>
            <p className="youtuber">{props.name}</p>
            <div className="duration">
              <p className="views">
                {props.views} <span> .</span>{" "}
              </p>
              <p className="time">{props.time}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
