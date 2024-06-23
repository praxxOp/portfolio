import React, { useRef, useState } from "react";
import "./SkillSection.css";
import SkillsectionGroup from "./skillsectionOne/SkillsectionGroup";

const Skillsection = () => {
  const [open, setopen] = useState(false);

  const openSection = () => {
    setopen(!open);
  };

  return (
    <>
      <div className={`skillsection ${open ? "open" : ""}`}>
        <div onClick={openSection} className="skillsection__heading">
          <h5>SKILLS</h5>
        </div>
        
        <SkillsectionGroup/>
      </div>
    </>
  );
};

export default Skillsection;
