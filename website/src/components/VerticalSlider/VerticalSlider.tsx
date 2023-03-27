import { useEffect, useRef, useState } from "react";
import { transform } from "typescript";
import Slide from "./Slide";
import "./VerticalSlider.scss";

const VerticalSlider: React.FC = () => {
  const slides = Array(5)
    .fill(1)
    .map((_, index) => (
      <div className="slider-card" key={index}> 
        <Slide />
      </div>
    ));

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((index) => (index + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;

    const sliderHeight = sliderRef.current.clientHeight;
    sliderRef.current.style.transform = `translate(0px, ${
      sliderHeight * activeSlideIndex * -1
    }px)`;
  }, [activeSlideIndex]);

  return (
    <div className="slider-frame">
      <div className="slider-buttons">
        {slides.map((_, index) => (
          <button
            className={`slider-button ${
              activeSlideIndex == index ? "slider-button__active" : ""
            }`}
            onClick={() => setActiveSlideIndex(index)}
            key={index}
          ></button>
        ))}
      </div>
      <div ref={sliderRef} style={{}} className="slider-content">
        {slides}
      </div>
    </div>
  );
};

export default VerticalSlider;
