import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Mywork from "./pages/Mywork";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Mywork />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
