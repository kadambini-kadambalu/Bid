import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="top-navbar">

        <div className="logo">
          cricbuzz
        </div>

        <div className="nav-menu">

          <Link to="/">Live Scores</Link>

          <Link to="/schedule">Schedule</Link>

          <Link to="/archives">Archives</Link>

          <Link to="/news">News</Link>

          <Link to="/series">Series</Link>

          <Link to="/teams">Teams</Link>

          <Link to="/videos">Videos</Link>

          <Link to="/rankings">Rankings</Link>
          <Link to="/Bidder">Bidder</Link>



        </div>

      </div>

      <div className="match-bar">
        <span>MATCHES</span>
        <span>IND vs NZ</span>
        <span>INDW vs AUSW</span>
        <span>ZIMW vs NZW</span>
      </div>
    </>
  );
}

export default Navbar;