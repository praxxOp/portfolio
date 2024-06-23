import React, { useState, useEffect, useRef } from "react";
import "./SkillsectionGroup.css";
import { motion } from "framer-motion";

const SkillsectionOne = () => {
  return (
    <div className="skillSection__container">
      <div className="skillsection__group">
        <div className="skillsectionOne">
          <div className="skillsectionOne__up">
            <motion.h1
              initial={{
                y: "200%",
                rotate: 15,
              }}
              whileInView={{
                y: "0%",
                rotate: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              FRONTEND
            </motion.h1>
            <motion.p
            initial={{
              y: "200%",
              rotate: 15,
            }}
            whileInView={{
              y: "0%",
              rotate: 0,
            }}
            transition={{
              duration: 1,
            }}>
              Showcasing a comprehensive range of expertise in both technical
              development and creative animation
            </motion.p>
          </div>
          <div className="skillsectionOne__down">
            <div className="skillsectionOne__down__left">
              <div className="skillsectionOne__down__left__development">
                <h1>Development Skills</h1>
                <div className="skillsectionOne__down__left__development__group">
                  
                </div>
              </div>
            </div>
            <div className="skillsectionOne__down__circle">
              <motion.h1
                animate={{
                  x: "-100%",
                }}
                transition={{
                  ease: "linear",
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="skillsectionOne__down__circle__group"
              >
                SKILLS <span>SKILLS</span>
              </motion.h1>
            </div>
            <div className="skillsectionOne__down__right">
              <div className="skillsectionOne__down__right__animation">
                <h1>Animation & Design Skills.</h1>
<div className="skillsectionOne__down__right__animation__group">
  
</div>
              </div>
            </div>
          </div>
        </div>
        <div className="skillsectionTwo"></div>
      </div>
    </div>
  );
};

export default SkillsectionOne;
