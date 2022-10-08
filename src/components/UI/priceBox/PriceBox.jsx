import "./priceBox.scss";
import { YellowLinkButton } from "../link/Links";
import ruble from "../../../assets/ruble.svg";

export const PriceBox = (props) => {
  return (
    <div className="card__price-box price-box">
      <div className="flex-column">
        <div className="price-box__price flex-row">
          <span>{props.item.price}</span>
          <img className="price-box__ruble" src={ruble} alt="рублей" />
        </div>
        {Boolean(props.item.pierPrice) && (
          <span className="small-text">
            {props.item.pierPrice ? props.item.pierPrice : ""}
            <img className="price-box__ruble-small" src={ruble} alt="рублей" />
            на причале
          </span>
        )}
      </div>
      <YellowLinkButton text="Подробнее" link={props.item.link} />
    </div>
  );
};
