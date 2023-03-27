import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userReducer, { selectUser, setUser } from "../../store/userReducer";
import "./Header.scss";
import logo from "./logo.svg";
import profile from "./profile.jpg";

const Header: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-content">
        <Link className="logo" to={"/"}>
          <div className="logo-frame">
            <div className="logo-image-frame">
              <img className="logo-image" src={logo} alt="AI Syndicate Logo" />
            </div>
          </div>
          <div className="logo-text">
            <div className="logo-upper-text">
              <b>AI</b>
            </div>
            <div className="logo-lower-text">
              <b>Syndicate</b>
            </div>
          </div>
        </Link>
        <div className="header-nav">
          <div>
            <Link to="/about">About The Platform</Link>
          </div>
          <div>
            <Link to="/ideas">Ideas of AI Start-ups</Link>
          </div>
          <div>
            <Link to={"projects"}>Our Startup Projects</Link>
          </div>
          <div>
            <a href="#">NFT</a>
          </div>
          {/* <div>
            <Link to="/register">Programmer Register</Link>
          </div> */}
        </div>
        <div className="header-util">
          {/* <div>
            <i className="bi bi-search"></i>
            <div>Search</div>
          </div> */}
          {user === null ? (
            <Link to={"/login"}>
              <i className="bi bi-person"></i>
              <div>Sign In</div>
            </Link>
          ) : (
            <>
              <Link className="header-profile" to={"/dashboard"}>
                <img src={profile} alt="123"></img>
                <div>{user.name}</div>
              </Link>
              <Link
                to={"/"}
                className="header-logout"
                onClick={() => dispatch(setUser(null))}
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
