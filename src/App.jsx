import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import Skillsection from "./components/skillsection/SkillSection";
import "./app.css";
import ParagraphSection from "./components/ParagraphSection/ParagraphSection";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Skillsection />
      <Navbar />
      <Home />
      <Project />
      <ParagraphSection/>
      <About/>
    </>
  );
};

export default App;
