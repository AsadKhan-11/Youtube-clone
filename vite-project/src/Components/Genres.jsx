import React from "react";
import Videos from "./Videos";
import "./Genres.css";
function Genres() {
  return (
    <>
      <nav className="genres-container">
        <nav className="genres">
          <button className="genre-btn">All</button>
          <button className="genre-btn">Music</button>
          <button className="genre-btn">Movies</button>
          <button className="genre-btn">Shorts</button>
          <button className="genre-btn">Comedy</button>
          <button className="genre-btn">Game shows</button>
          <button className="genre-btn">Mixes</button>
          <button className="genre-btn">Gaming</button>
        </nav>
        <div className="content">
          <Videos />
        </div>
      </nav>
    </>
  );
}

export default Genres;
