import React from "react";
import "./Project.css";
import Projectdetails from "./Projectdetails/Projectdetails";
import port1 from "../../assets/port1.jpg";
import port2 from "../../assets/port2.jpg";
import port3 from "../../assets/port3.png";
import { motion } from "framer-motion";

const Project = () => {
  const details = [
    {
      projectName: "ATHLIC",
      projectDescription:
        "I created this website to showcase my animation skills with smooth, engaging visuals. Explore how I use animation to create an immersive experience.",
      projectImg: port3,
      Id: 3,
      projectGithub: "https://github.com/praxxOp/Athlic",
      projectFigma:
        "https://www.figma.com/community/file/1336244596719220255/real-estate",
    },

    {
      projectName: "REALESTATE",
      projectDescription:
        "The focal point of this website is to spotlight my proficiency in API integration and effective data management.",
      projectImg: port2,
      Id: 2,
      projectGithub: "https://github.com/praxxOp/realestate",
      projectFigma:
        "https://www.figma.com/community/file/1336244596719220255/real-estate",
    },
    {
      projectName: "WEB3",
      projectDescription:
        "This website showcases my proficiency in animation and design",
      projectImg: port1,
      Id: 1,
      projectGithub: "https://github.com/praxxOp/web0.3",
      projectFigma:
        "https://www.figma.com/community/file/1299016984863367615/web3-website",
    },
  ];

  return (
    <div className="main__project" id="Project">
      <div className="project__heading">
        <h4 className="project__heading__left">
          SOME <br /> SELECTED
        </h4>

        {".PROJECTS".split("").map((item) => {
          return (
            <motion.h1
              whileHover={{
                scale: 0.9,
                color: "#1D2531",
              }}
              transition={{
                duration: 0.5,
                type: "spring",
              }}
            >
              {item}
            </motion.h1>
          );
        })}
        <h4 className="project__heading__up">
          WEB <br /> DESIGN
        </h4>
        <h4 className="project__heading__down">FRONTEND</h4>
      </div>
      {details.map((item, index) => (
        <Projectdetails
          key={index}
          name={item.projectName}
          description={item.projectDescription}
          projectImg={item.projectImg}
          Id={item.Id}
          GithubLink={item.projectGithub}
          FigmaLink={item.projectFigma}
        />
      ))}
    </div>
  );
};

export default Project;
