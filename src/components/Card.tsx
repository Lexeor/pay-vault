import { useState } from "react";
import { Service } from "../types/service.type";

type CardProps = Service & {
  payFunc?: () => void;
};

const icons: { [name: string]: string } = {
  Internet: "ri-wifi-line",
  TV: "ri-tv-line",
  Mobile: "ri-smartphone-line",
  Electricity: "ri-flashlight-line",
  Rent: "ri-home-3-line",
  Water: "ri-drop-line",
  Gas: "ri-fire-line",
};

const Card = ({ type, provider, cost, currency, isPayed }: CardProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened((prev) => !prev);
  };

  const btnClass = !isPayed ? "card-btn-pay" : "card-btn-pay payed";
  const btnIcon = !isPayed ? (
    <i className="ri-money-dollar-circle-line"></i>
  ) : (
    <i className="ri-check-line"></i>
  );

  return (
    <div className="card" onClick={handleOpen}>
      <div className="card-body">
        <div className="card-icon">
          <i className={`${icons[type]} icon`}></i>
        </div>
        <div className="card-header">
          <span className="card-service-text">{type}</span>
          <span className="card-provider-text">{provider}</span>
        </div>
        <div className="card-cost">
          {currency}
          {cost}
        </div>
        <button className={btnClass}>
          <img src={`icons/money.svg`} alt="icon" />
        </button>
      </div>
      {isOpened && <div className="card-details">Details</div>}
    </div>
  );
};

export default Card;
