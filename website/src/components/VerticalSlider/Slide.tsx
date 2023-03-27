import BlueButton from "../UIElements/BlueButton/BlueButton";
import "./Slide.scss";
import brain from "./brain.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userReducer";

const Slide: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <div className="slide-container">
      <div className="slide">
          <div className="slide-content">
            <div className="slide-heading">Help Fund The Future</div>
            <div className="slide-description">
              Entrepreneurs are the innovators, the dreamers, the ones crazy enough
              to potentially change the world. By backing them, you can make a
              difference too
            </div>
            {!user && <BlueButton onClick={() => navigate("/register")} name="Become An Investor" />}
            <BlueButton onClick={() => navigate("/projects")} name="Raise A Round" />
          </div>
          <img className="slide-sidepic" src={brain}></img>
      </div>
    </div>
  );
};

export default Slide;
