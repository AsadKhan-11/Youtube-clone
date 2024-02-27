import React from "react";
import "./Videos.css";
function Videos(props) {
  return (
    <>
      <div className="container">
        <img className="vid-img" src={props.img} />

        <div className="info">
          <img className="logo" src />
          <div className="txt-container">
            <h3 className="title">{props.title}</h3>
            <p className="youtuber">{props.name}</p>
            <div className="duration">
              <p className="views">{props.views}</p>
              <p className="time">{props.time}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
