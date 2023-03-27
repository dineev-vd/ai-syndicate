import "./NewsPreview.scss";
import preview from "./preview.png";

const NewsPreview: React.FC = () => {
  return (
    <div className="news-preview-container">
      <img src={preview} className="news-preview-img"></img>
      <div className="news-preview-info">
        <div className="news-preview-date">2020-10-15</div>
        <div className="news-preview-title">
          Neuromorphic Memory Device Simulates Neurons and Synapses
        </div>
        <div className="news-preview-description">
          Researchers have reported a nano-sized neuromorphic memory device that
          emulates neurons and synapses simultaneously in a unit cell, another
          step toward completing the goal of neuromorphic computing ...
        </div>
      </div>
    </div>
  );
};

export default NewsPreview;
