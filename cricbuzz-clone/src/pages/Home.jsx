import React from "react";
import MatchSlider from "../components/MatchSlider";

function Home() {
  return (
    <div>

      {/* MATCH SLIDER UNDER NAVBAR */}
      <MatchSlider />

      <div className="page-container">

        {/* LEFT NEWS */}
        <div className="left-news">

          <h3 className="section-title">LATEST NEWS</h3>

          <p>How New Zealand lost the Powerplay and the final</p>
          <p>Litton Das set to take middle-order role in ODI comeback against Pakistan</p>
          <p>Olympic gold next target for Suryakumar after T20 World Cup triumph</p>
          <p>India again, by a distance</p>

        </div>


        {/* CENTER MAIN NEWS */}
        <div className="main-news">

          <img
            src="https://images.cricbuzz.com/images/dummy.jpg"
            className="main-image"
            alt="cricket news"
          />

          <h2>India again, by a distance</h2>

          <p>
            After amassing 255 in the final, New Zealand were blown away by
            96 runs as India became the first team to win the Men's T20
            World Cup title again in dominant fashion.
          </p>

        </div>


        {/* RIGHT VIDEOS */}
        <div className="right-video">

          <h3 className="section-title">FEATURED VIDEOS</h3>

          <img
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
            className="video-thumb"
            alt="video"
          />

          <p>
            Cricbuzz Live: IND vs NZ, T20 World Cup Final | Post match show
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;