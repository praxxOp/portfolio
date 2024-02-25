import React from "react";
import "./Project.css";
import Projectdetails from "./Projectdetails/Projectdetails";
import port1 from "../../assets/port1.jpg";
import port3 from "../../assets/port3.jpg";
const Project = () => {
  const details = [
    {
      projectName: "REALESTATE",
      projectDescription:
        "The focal point of this website is to spotlight my proficiency in API integration and effective data management.",
      projectImg: port1,
      headingcolor: "#362827",
    },
    {
      projectName: "WEB3",
      projectDescription:
        "This website showcases my proficiency in animation and design",
      projectImg: port3,
      headingcolor: "#005f2a",
    },
  ];

  return (
    <div className="main__project">
      <div className="project__heading">
        <h1>
          PRO <br /> <span>JECTS</span>
        </h1>
      </div>
      {details.map((item, index) => (
        <Projectdetails
          key={index}
          name={item.projectName}
          description={item.projectDescription}
          projectImg={item.projectImg}
          headingcolor={item.headingcolor}
        />
      ))}
    </div>
  );
};

export default Project;
