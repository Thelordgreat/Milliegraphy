import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Nav from "./Components/NavBar/Nav";
import Couples from "./Components/Portfolio/Couples/Couples";
import Fashion from "./Components/Portfolio/Fashion/Fashion";
import Portfolio from "./Components/Portfolio/Portfolio";
import Portraits from "./Components/Portfolio/Portraits/Portraits";
import Reviews from "./Components/Reviews/Reviews";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Header />
        <About />
        <Portfolio />
        <Reviews />
        <Contact />


        <Routes>
          <Route path="/fashion" exact element={<Fashion />} />
          <Route path="/portraits" exact element={<Portraits />} />
          <Route path="/couples" exact element={<Couples />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
