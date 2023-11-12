import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./components/Navbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Aboutme from "./components/AboutMe/Aboutme";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Hero />
        <Aboutme />
        <Project />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;