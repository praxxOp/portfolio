import React from "react";
import "./Project.css";
import Projectdetails from "./Projectdetails/Projectdetails";

const Project = () => {
  const details = [
    {
      projectName: "REAL ESTATE",
      projectDescription:
        "The focal point of this website is to spotlight my proficiency in API integration and effective data management.",
    },
    {
      projectName: "WEB3",
      projectDescription:
        "This website spotlights my animation and design expertise.",
    },
    {
      projectName: "SHOE E-COMMERCE",
      projectDescription:
        "This website highlights my expertise in state management, CRUD operations, and feature development.",
    },
  ];

  return (
    <div className="main__project">
      <div className="project__heading">
        <h1>
          PRO <br /> JECTS
        </h1>
      </div>
      {details.map((item, index) => (
        <Projectdetails key={index} name={item.projectName} description={item.projectDescription} />
      ))}
    </div>
  );
};

export default Project;
