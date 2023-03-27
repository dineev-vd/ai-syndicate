import { NavLink } from "react-router-dom";
import "./Links.scss";

interface LinksProps {
  links: {
    title: string;
    location: string;
    style?: React.CSSProperties;
  }[];
}

const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <div className="links">
      {links.map((link, index) => (
        <NavLink
          key={index}
          style={link.style}
          className={({ isActive }) => (isActive ? "links_active" : "")}
          to={link.location}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
