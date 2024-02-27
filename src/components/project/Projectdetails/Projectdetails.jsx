import React from "react";
import "./Projectdetails.css";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const Projectdetails = ({ name, description, projectImg, headingcolor }) => {
  return (
    <>
      <div className="main__project__page">
        <motion.div
          initial={{
            opacity: 0,
            x: "150px",
          }}
          whileInView={{
            opacity: 1,
            x: "0",
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            margin: "-200px ",
            once: true,
          }}
          className="description__section"
        >
          <h4 style={{ color: headingcolor }}>{name}</h4>
          <h6>{name}</h6>
          <p style={{ color: headingcolor }}> {description}</p>
          <MdArrowOutward
            size={50}
            style={{ marginLeft: "17vw", color: headingcolor }}
          />
        </motion.div>
        <img src={projectImg} alt="Image of my project" />
        <motion.div
          initial={{
            opacity: 0,
            x: "-150px",
          }}
          whileInView={{
            opacity: 1,
            x: "0",
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            margin: "-200px ",
            once: true,
          }}
          className="tech__section"
        >
          <div className="stack__tech">
            <div className="stack__tech__name">
              <h3>NEXT.JS</h3>
              <h3>FRAMER MOTION</h3>
              <h3>CSS</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projectdetails;
