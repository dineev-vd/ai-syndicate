import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { investInId, selectUser } from "../../store/userReducer";
import BlueButton from "../UIElements/BlueButton/BlueButton";
import "./ProjectDetailsLanding.scss";

interface ProjectDetailsLandingProps {
  id: string;
}

const ProjectDetailsLanding: React.FC<ProjectDetailsLandingProps> = ({
  id,
}) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="project-details">
      <div className="project-details-left">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <i className="bi bi-youtube project-details-youtube"></i> */}
      </div>
      <div className="project-details-right">
        <div className="project-details-heading">Project {id}</div>
        <div className="project-details-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.eiusmod tempor incididunt ut labore et
          dolore magna aliqua.{" "}
        </div>
        <div className="project-details-buttons">
          {user &&
          user.investedStartups &&
          user.investedStartups.includes(id) ? (
            <BlueButton
              style={{ backgroundColor: "lightgreen" }}
              name={"Dashboard"}
              onClick={() => navigate("/dashboard/investments")}
            />
          ) : (
            <BlueButton
              name={"Invest"}
              onClick={() =>
                user ? dispatch(investInId(id)) : navigate("/login")
              }
            />
          )}
          <BlueButton name={"NFT"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsLanding;
