import { useState } from "react";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import ProjectDetailsLanding from "../ProjectDetailsLanding/ProjectDetailsLanding";
import "./FavoriteStartups.scss";

const FavoriteStartups: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  return (
    <div className="favorite-startups-container">
      <div className="favorite-startups-title">Our Favorite Startups</div>
      <HorizontalSlider setSelected={setSelectedId}/>
      <ProjectDetailsLanding id={selectedId}/>
    </div>
  );
};

export default FavoriteStartups;
