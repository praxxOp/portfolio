import React from "react";
import "./Projectdetails.css";
import { MdArrowOutward } from "react-icons/md";
const Projectdetails = ({ name, description, projectImg, headingcolor }) => {
  return (
    <>
      <div className="main__project__page">
        <div className="description__section">
          <h4 style={{color: headingcolor}}>{name}</h4>
          <h6>{name}</h6>
          <p style={{color: headingcolor}}> {description}</p>
          <MdArrowOutward size={50} style={{marginLeft: "17vw" , color: headingcolor} } />
        </div>
        <img src={projectImg} alt="Image of my project" />
        <div className="tech__section"></div>
      </div>
    </>
  );
};

export default Projectdetails;
