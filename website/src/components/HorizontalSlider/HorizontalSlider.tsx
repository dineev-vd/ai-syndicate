import { useEffect, useState } from "react";
import HorizontalSlide from "./HorizontalSlide";
import "./HorizontalSlider.scss";

import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import pic4 from "./4.jpg";

interface SlidingWindowElement {
  picSrc: string;
  key: string;
  title: string;
  desc: string;
  id: string;
}

interface HorizontalSliderProps {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ setSelected }) => {
  const windowSize = 5;
  const slidesCount = 10;

  const slidesStubsArray = Array(slidesCount)
    .fill(1)
    .map((_, index) => index);

  const picsArray = [pic1, pic2, pic3, pic4];

  const [startIndex, setStartIndex] = useState(0);
  const [slidingWindowArray, setSlidingWindowArray] = useState<
    SlidingWindowElement[]
  >([]);

  useEffect(() => {
    if (slidingWindowArray.length === 0) return;
    console.log(slidingWindowArray.length / 2);
    
    setSelected(slidingWindowArray[Math.floor(slidingWindowArray.length / 2)].id);
  }, [slidingWindowArray]);

  useEffect(() => {
    const curWindowArray: SlidingWindowElement[] = Array(windowSize)
      .fill(1)
      .map((_, index) => {
        const slidesArrayIndex = (startIndex + index) % slidesCount;
        const key = `${Math.floor(index / slidesCount)}_${slidesArrayIndex}`;
        const picSrc = `${picsArray[slidesArrayIndex % picsArray.length]}`;
        const title = `Title ${slidesStubsArray[slidesArrayIndex]}`;
        const desc = `Description ${slidesStubsArray[slidesArrayIndex]}`;
        const id = slidesStubsArray[slidesArrayIndex].toString();

        return { id: id, key: key, picSrc: picSrc, title: title, desc: desc };
      });

    setSlidingWindowArray(curWindowArray);
  }, [startIndex]);

  return (
    <div className="horizontal-slider">
      <button
        className="horizontal-slider-button"
        onClick={() =>
          setStartIndex(
            (index) => (((index - 1) % slidesCount) + slidesCount) % slidesCount
          )
        }
      >
        <i className="bi bi-arrow-left horizontal-slider-arrow-left"></i>
      </button>
      <div className="horizontal-slider-slides">
        {slidingWindowArray.map((slide, index) => {
          const distFromMiddle = index - (windowSize - 1) / 2;
          const className =
            Math.abs(distFromMiddle) <= 2
              ? `horizontal-slider-slide_${distFromMiddle}`
              : "";

          return (
            <div className={className} key={index}>
              <HorizontalSlide
                imageSrc={slide.picSrc}
                title={slide.title}
                description={slide.desc}
                id={slide.id}
              />
            </div>
          );
        })}
      </div>
      <button
        className="horizontal-slider-button"
        onClick={() =>
          setStartIndex(
            (index) => (((index + 1) % slidesCount) + slidesCount) % slidesCount
          )
        }
      >
        <i className="bi bi-arrow-right horizontal-slider-arrow-right"></i>
      </button>
    </div>
  );
};

export default HorizontalSlider;
