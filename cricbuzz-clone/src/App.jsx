import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Teams from "./pages/Teams";
import Rankings from "./pages/Rankings";
import Series from "./pages/Series";
import Archives from "./pages/Archives";
import Bidder from "./pages/Bidder";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/Bidder" element={<Bidder />} />


        <Route path="/" element={<Home />} />

        <Route path="/schedule" element={<Schedule />} />

        <Route path="/archives" element={<Archives />} />

        <Route path="/news" element={<News />} />

        <Route path="/series" element={<Series />} />

        <Route path="/teams" element={<Teams />} />

        <Route path="/videos" element={<Videos />} />

        <Route path="/rankings" element={<Rankings />} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;