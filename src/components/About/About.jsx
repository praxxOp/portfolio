import React from "react";
import "./About.css";
import img from "../../assets/my image main.jpeg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div className="main__about">
        <div className="left__About">
          <div className="image__container">
            <motion.img
              initial={{ filter: "grayscale(100%)" }}
              whileHover={{ filter: "grayscale(0%)" }}
              transition={{
                type: "spring",
                duration: 2,
              }}
              src={img}
              alt="image of me"
            />
          </div>
        </div>
        <div className="right__about">
          <p>
            I'm a passionate developer constantly learning new technologies and
            staying abreast of the latest news. Let me help you turn your ideas
            into reality.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
