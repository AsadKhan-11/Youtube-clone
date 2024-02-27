import React from "react";
import Videos from "./Videos";
import "./Genres.css";
import Coleman from "./images/Coleman.jpg";
import Cr7 from "./images/Cr7.jpg";
import Federer from "./images/Federer.jpg";
import Jordan from "./images/Jordan.jpg";
import Kohli from "./images/Kohli.jpg";
import Ronnie from "./images/Ronnie.jpg";

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
          <Videos
            img={Coleman}
            logo=""
            title="Training with 8 times Champion"
            name="Weightlifter"
            views="198K views"
            time="5 days ago"
          />
          <Videos
            img={Cr7}
            logo=""
            title="Cristiano Ronaldo Is Back to HIS BEST at 38!"
            name="Football fans"
            views="759K views"
            time="2 days ago"
          />
          <Videos
            img={Federer}
            logo=""
            title="Federer at his best"
            name="Federer fanclub"
            views="200K views"
            time=" 1 month ago"
          />
          <Videos
            img={Jordan}
            logo=""
            title="How Michael Jordan Broke 'The Jordan Rules'"
            name="NBA diaries"
            views="354K views"
            time="5 months ago"
          />
          <Videos
            img={Kohli}
            logo=""
            title="Virat Kohli | Life, Career, Cricket, Awards & Facts"
            name="The ashes"
            views="500K views"
            time=" 1 week ago"
          />
          <Videos
            img={Ronnie}
            logo=""
            title="Best Snooker moments"
            name="360 snooker"
            views="442K views"
            time="3 weeks ago"
          />
        </div>
      </nav>
    </>
  );
}

export default Genres;
