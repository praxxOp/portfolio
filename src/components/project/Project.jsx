import React from "react";
import "./Project.css";
import Projectdetails from "./Projectdetails/Projectdetails";
import port1 from "../../assets/port1.jpg";
import port3 from "../../assets/port3.jpg";
import { motion } from "framer-motion";

const Project = () => {
  const details = [
    {
      projectName: "REALESTATE",
      projectDescription:
        "The focal point of this website is to spotlight my proficiency in API integration and effective data management.",
      projectImg: port1,
      headingcolor: "#362827",
      Id: 1,
      projectGithub: "https://github.com/praxxOp/realestate",
      projectFigma:
        "https://www.figma.com/community/file/1336244596719220255/real-estate",
    },
    {
      projectName: "WEB3",
      projectDescription:
        "This website showcases my proficiency in animation and design",
      projectImg: port3,
      headingcolor: "#005f2a",
      Id: 2,
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
              }}
              transition={{
                duration: 1,
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
          headingcolor={item.headingcolor}
          Id={item.Id}
          GithubLink={item.projectGithub}
          FigmaLink={item.projectFigma}
        />
      ))}
    </div>
  );
};

export default Project;
