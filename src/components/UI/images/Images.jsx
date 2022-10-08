import "./images.scss";
import stub from "../../../assets/stub.jpg";
import { colorData } from "../../../data/colorData";
import { useEffect, useState } from "react";

export const ImageCard = (props) => {
  const [colorBg, setColorBg] = useState(null);

  useEffect(() => {
    props.imageLabel
      ? setColorBg(colorData.filter((item) => item.id === props.imageLabel))
      : setColorBg(null);
  }, [props.imageLabel]);

  return (
    <picture>
      {Boolean(props.imageLabel) && (
        <span
          className={
            colorBg
              ? `image-card__label ${colorBg[0].color}`
              : "image-card__label"
          }
        >
          {props.imageLabel}
        </span>
      )}

      <source
        media="(max-width: 480px)"
        srcSet={props.imgSmallPath ? props.imgSmallPath : stub}
      />
      <img
        className="image-card"
        src={props.imgpath ? props.imgpath : stub}
        alt={props.title}
      />
    </picture>
  );
};
