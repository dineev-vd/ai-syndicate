import BlueButton from "../UIElements/BlueButton/BlueButton";
import "./OurProjects.scss";
import ProjectCard from "./ProjectCard";
import first from "./1.png";
import second from "./2.png";
import { Navigate, useNavigate } from "react-router-dom";

const OurProjects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="our-projects-container">
      <div className="our-projects-heading">Our Projects</div>
      <div className="our-projects-content">
        <div className="our-projects-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </div>
        <div className="our-projects-cards">
          <ProjectCard imgSrc={first} />
          <ProjectCard imgSrc={second} />
          <ProjectCard imgSrc={first} />
        </div>
        <BlueButton onClick={() => navigate("/projects")} name="View All" />
      </div>
    </div>
  );
};

export default OurProjects;
