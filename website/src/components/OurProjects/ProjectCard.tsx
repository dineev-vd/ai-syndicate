import { useNavigate } from "react-router-dom";
import BlueButton from "../UIElements/BlueButton/BlueButton";
import "./ProjectCard.scss";

interface ProjectCardProps {
  imgSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc }) => {
  const navigate = useNavigate();
  return (
    <div className="project-card">
      <div className="project-card-image-container">
        <img src={imgSrc} className="project-card-image" />
        <div className="project-card-image-bottom" />
      </div>
      <div className="project-card-content">
        <div className="project-card-title">First Project</div>
        <div className="project-card-description">
          Copy the following link on the web where you will be using this
          image.If you want more information,read the attribution guide or
          download the license.
        </div>
        <div className="project-card-rows">
          <div>
            <div>
              <i className="bi bi-bullseye"></i>Goal for support
            </div>
            <div>50,000$</div>
          </div>
          <div>
            <div>
              <i className="bi bi-currency-dollar"></i>Support so far
            </div>
            <div>20,000$</div>
          </div>
          <div>
            <div>
              <i className="bi bi-graph-up-arrow"></i>Completion rate
            </div>
            <div>50%</div>
          </div>
          <div>
            <div>
              <i className="bi bi-flag"></i>Points
            </div>
            <div>89</div>
          </div>
        </div>
        <div className="project-card-buttons">
          <BlueButton onClick={() => navigate("/projects/0")} name="Invest" />
          <BlueButton onClick={() => navigate("/projects/0")} name="More" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
