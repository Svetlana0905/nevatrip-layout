import "./buttons.scss";
export const TimeButton = ({ text, style, handleclick }) => {
  //   console.log(style);
  return (
    <button
      onClick={() => handleclick()}
      className={style ? "time-btn" : "hidden"}
    >
      {text}
    </button>
  );
};
