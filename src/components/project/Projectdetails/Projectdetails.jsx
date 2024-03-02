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
            className="description__arrow"
          />
        </motion.div>
        <img src={projectImg} alt="Image of my project" />
        <div className="bottom__description__section">
          <p>
            Designed and developed by me to ensure that you can visit my Figma
            and GitHub.
          </p>
          <div className="right__bottom">
            <div className="bottom__buttons">
              <h2>
                GitHub <MdArrowOutward size={20} />
                <hr />
              </h2>
            </div>
            <div className="bottom__buttons">
              <h2>
                Figma <MdArrowOutward size={20} />
                <hr />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectdetails;
