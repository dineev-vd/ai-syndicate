import { useParams } from "react-router-dom";
import "./FillerSignup.scss";

interface FillerProps {
  hand?: boolean;
  title?: string;
  description?: string;
}

const Filler: React.FC<FillerProps> = ({ hand, title, description }) => {
  const { startupId } = useParams();

  return (
    <div className={`filler-signup ${hand ? "filler-signup-with-hand" : ""}`}>
      {hand ? <div className="filler-signup-hand"></div> : null}
      <div className={`filler-signup-text`}>
        <div className="filler-signup-title">
          {title ?? "Welcome to AI Syndicate"}
        </div>
        {description ? (
          <div className="filler-signup-description">{description}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Filler;
