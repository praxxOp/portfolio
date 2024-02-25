import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import Skillsection from "./components/skillsection/SkillSection";
import "./app.css";
import Mouse from "./components/mousefollower/Mouse";
const App = () => {
  return (
    <>
    <Mouse/>
      <Skillsection />
      <Navbar />
      <Home />
      <Project />
    </>
  );
};

export default App;
