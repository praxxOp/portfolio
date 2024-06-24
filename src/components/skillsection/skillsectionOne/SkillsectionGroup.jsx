import React, { useState, useEffect, useRef } from "react";
import "./SkillsectionGroup.css";
import { motion } from "framer-motion";

const SkillsectionOne = () => {
  const DevlopmentSkills = ["Next JS", "React JS", "Git/Github", "Html/CSS"];
  const AnimationSkills = ["Framer motion", "Gsap", "Figma", "TailwindCSS"];
  return (
    <div className="skillSection__container">
      <div className="skillsection__group">
        <div className="skillsectionOne">
          <div className="skillsectionOne__up">
            <motion.h1
              initial={{
                y: "-100%",
                rotate: -10,
              }}
              whileInView={{
                y: "0%",
                rotate: 0,
              }}
              transition={{
                duration: 1,
                type: "spring"
              }}
            >
              FRONTEND
            </motion.h1>
            <p>
              Showcasing a comprehensive range of expertise in both technical
              development and creative animation
            </p>
          </div>
          <div className="skillsectionOne__down">
            <div className="skillsectionOne__down__left">
              <div className="skillsectionOne__down__left__development">
                <h1>Development Skills</h1>
                <div className="skillsectionOne__down__left__development__group">
                  {DevlopmentSkills.map((item, index) => {
                    return (
                      <motion.div
                        whileInView={{
                          width: index === 0 ? "10vw" : `${(index + 1) * 10}vw`,
                        }}
                        transition={{
                          type: "spring",
                          duration: 2,
                        }}
                        className="skill__name"
                        id={index}
                      >
                       {item}  
                      </motion.div>
                    );
                  })}
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
                  {
                    AnimationSkills.map((item, index) => {
                      return (
                        <motion.div
                          whileInView={{
                            width: index === 0 ? "10vw" : `${(index + 1) * 10}vw`,
                          }}
                          transition={{
                            type: "spring",
                            duration: 2,
                          }}
                          className="skill__name"
                          id={index}
                        >
                         {item}  
                        </motion.div>
                      );
                    })
                  }
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
