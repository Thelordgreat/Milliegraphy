import React from "react";
import Nav from "./Components/NavBar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Couples from "./Components/Portfolio/Couples/Couples";
import Fashion from "./Components/Portfolio/Fashion/Fashion";
import Portraits from "./Components/Portfolio/Portraits/Portraits";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fashion" element={<Fashion />} />
          <Route exact path="/portraits" element={<Portraits />} />
          <Route exact path="/couples" element={<Couples />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
