import React, { useRef, useState } from "react";
import "./SkillSection.css";

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
        {open && (
          <div className="skillsection__content">
            <div className="skillsection__content__left"></div>
            <div className="skillsection__content__mid"></div>
            <div className="skillsection__content__right"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Skillsection;
