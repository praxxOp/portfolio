import React from "react";
import "./Navbar.css";
import { motion, spring } from "framer-motion";
const Navbar = () => {
  return (
    <>
      <div className="main__navbar">
        <div className="navbar__heading">
          <div className="animated__headline">
            <motion.h1
              initial={{
                y: "300%",
                rotate: 15,
              }}
              animate={{
                y: "0",
                rotate: 0,
                transition: {
                  duration: 1.4,
                  type: "tween",
                },
              }}
              className="name__h1"
            >
              prathamesh
            </motion.h1>
          </div>
          <h6>PRATHAMESH</h6>
        </div>
        <div className="Navbar__content">
          <a href="#About">ABOUT</a>
          <a href="#Project">PROJECTS</a>
          <a href="#Contact">CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
