import "./links.scss";
import { Link } from "react-router-dom";

export const YellowLinkButton = ({ text, link }) => {
  return (
    <Link to={link} className="yellow-link-btn">
      {text}
    </Link>
  );
};
export const TimeLinkButton = ({ text, link }) => {
  return (
    <Link to={link} className="time-link-btn">
      {text}
    </Link>
  );
};
