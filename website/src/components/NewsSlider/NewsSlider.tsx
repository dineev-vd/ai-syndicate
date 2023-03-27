import { useEffect, useRef, useState } from "react";
import NewsPreview from "../News/NewsPreview";
import "./NewsSlider.scss";

const NewsSlider: React.FC = () => {
  const newsLength = 2;
  const newsArray = Array(newsLength)
    .fill(1)
    .map((_, index) => index);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((index) => (index + 1) % newsLength);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;

    const sliderWidth = sliderRef.current.clientWidth;
    sliderRef.current.style.transform = `translate(${
      sliderWidth * activeSlideIndex * -1
    }px, 0px)`;
  }, [activeSlideIndex]);

  return (
    <div className="news-slider-container">
      <div ref={sliderRef} className="news-slider">
        {newsArray.map((i) => (
          <div className="news-slide">
            <div className="news-slide-row">
              <NewsPreview />
              <NewsPreview />
            </div>
            <div className="news-slide-row">
              <NewsPreview />
              <NewsPreview />
            </div>
          </div>
        ))}
      </div>
      <div className="news-slider-buttons">
        {newsArray.map((_, index) => (
          <button
            className={`news-slider-button ${
              index == activeSlideIndex ? "news-slider-button__active" : ""
            }`}
            onClick={() => setActiveSlideIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;
