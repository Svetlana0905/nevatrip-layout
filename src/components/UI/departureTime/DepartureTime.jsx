import "./departureTime.scss";
import { departureTimes } from "../../../data/departureTimes";
import { useEffect, useState, useRef } from "react";
import { TimeLinkButton } from "../link/Links";
import { TimeButton } from "../buttons/Buttons";

export const DepartureTime = (props) => {
  const ref = useRef(null);
  const [timeData, setTimeData] = useState([]);
  const [showMoreButton, setsHowMoreButton] = useState(false);
  const [showMoreTime, setsHowMoreTime] = useState(false);

  useEffect(() => {
    props.id
      ? setTimeData(departureTimes.filter((item) => item.id === props.id))
      : setTimeData([]);
  }, [props.id]);

  useEffect(() => {
    if (timeData && ref.current !== null) {
      if (ref.current.getBoundingClientRect().height < ref.current.scrollHeight)
        setsHowMoreButton(true);
    }
  }, [timeData]);

  const handleclick = () => {
    setsHowMoreTime(!showMoreTime);
  };

  return (
    <div className="departure">
      {Boolean(timeData.length) && (
        <>
          <p className="list__list-item text text-nowrap">
            {timeData[0]?.title ? timeData[0].title : null}
          </p>
          <div className="departure__wrapper">
            <div className="departure__inner">
              <div
                className={
                  showMoreTime
                    ? "departure__times-block departure__open"
                    : "departure__times-block "
                }
                ref={ref}
              >
                {timeData[0]?.time?.length
                  ? timeData[0].time.map((item) => (
                      <TimeLinkButton text={item} link={"#"} key={item} />
                    ))
                  : ""}
              </div>
            </div>
            <TimeButton
              text="Еще"
              style={showMoreButton}
              handleclick={handleclick}
            />
          </div>
        </>
      )}
    </div>
  );
};
