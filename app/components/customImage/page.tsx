import { CSSProperties } from "react";
import "./styles.css";
interface IMyImage {
  img1: string;
  img2: string;
  customStyle?: CSSProperties;
}

export default function CustomImage({ img1, img2, customStyle }: IMyImage) {
  return (
    <div className="img-container" style={customStyle}>
      <img className="img1" alt="" src={img1} />
      <img className="img2" alt="" src={img2} />
    </div>
  );
}
