import { useNavigate } from "react-router-dom";
import "./HorizontalSlide.scss";

interface HorizontalSlideProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  id?: string;
}

const HorizontalSlide: React.FC<HorizontalSlideProps> = ({
  imageSrc,
  title,
  description,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      style={{ backgroundImage: `url(${imageSrc})` }}
      className="horizontal-slide"
    >
      {/* <img src={imageSrc}></img> */}
      <div className="horizontal-slide-title">{title}</div>
      <div className="horizontal-slide-description">{description}</div>
    </div>
  );
};

export default HorizontalSlide;
