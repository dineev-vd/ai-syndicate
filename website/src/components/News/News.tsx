import NewsSlider from "../NewsSlider/NewsSlider";
import BlueButton from "../UIElements/BlueButton/BlueButton";
import "./News.scss";
import wave from "./wave.png";

const News: React.FC = () => {
  return (
    <div className="news-container">
      <div className="news-wave-container">
        <img className="news-wave-left" src={wave}></img>
        <img className="news-wave-right" src={wave}></img>
      </div>
      <div className="news-title">News</div>
      <div className="news-content">
        <NewsSlider />
        <BlueButton name="View All" />
      </div>
    </div>
  );
};

export default News;
