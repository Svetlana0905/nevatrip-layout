import "./card.scss";
import { CardsData } from "../../data/cardsData";
import { CardList } from "../UI/list/List";
import { PriceBox } from "../UI/priceBox/PriceBox";
import { DepartureTime } from "../UI/departureTime/DepartureTime";
import { ImageCard } from "../UI/images/Images";

export const Card = () => {
  return (
    <section className="card flex-column">
      {CardsData.map((item) => (
        <div key={item.id} className="card__item">
          <ImageCard
            imgSmallPath={item.imgSmallPath}
            imgpath={item.imgpath}
            title={item.title}
            imageLabel={item.label}
          />
          <div className="card__content-column flex-column">
            <h3 className="card__subtitle subtitle">{item.title}</h3>
            <p className="card__trip-duration small-text">
              {item.tripDuration}
            </p>
            <CardList data={item.description} propStyle="card__list" />
            <DepartureTime id={item.id} />
            <PriceBox item={item} />
          </div>
        </div>
      ))}
    </section>
  );
};
