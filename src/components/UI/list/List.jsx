import "./list.scss";
export const CardList = ({ ...props }) => {
  return (
    <ul
      className={
        props.propStyle
          ? `list flex-column ${props.propStyle}`
          : "list flex-column"
      }
    >
      {props?.data?.length > 0
        ? props.data.map((item) => (
            <li key={item.id} className="list__list-item text">
              {item.text}
            </li>
          ))
        : "Нет данных"}
    </ul>
  );
};
