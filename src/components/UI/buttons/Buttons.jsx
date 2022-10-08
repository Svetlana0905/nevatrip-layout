import "./buttons.scss";
export const TimeButton = ({ text, style, handleclick }) => {
  return (
    <button
      onClick={() => handleclick()}
      className={style ? "time-btn" : "hidden"}
    >
      {text}
    </button>
  );
};
