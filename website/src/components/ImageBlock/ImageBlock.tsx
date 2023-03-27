import "./ImageBlock.scss";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import { useState } from "react";

const imgList = [img1, img2, img3, img4, img5, img6];

const ImageBlock: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="image-block">
      <div className="image-block-preview">
        {imgList.map((img, index) => (
          <div
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index ? "image-block-preview_selected" : ""
            }
          >
            <img src={img}></img>
          </div>
        ))}
      </div>
      <div className="image-block-main-image">
        <div>
          <img src={imgList[selectedIndex]}></img>
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
