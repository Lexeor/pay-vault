import { useState } from "react";

type CardProps = {
  type: string;
  provider: string;
  cost: number;
  currency: string;
  isPayed: boolean;
  payFunc?: () => void;
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
          <i className="ri-flashlight-line icon"></i>
        </div>
        <div className="card-header">
          <span className="card-service-text">{type}</span>
          <span className="card-provider-text">{provider}</span>
        </div>
        <div className="card-cost">
          {currency}
          {cost}
        </div>
        <button className={btnClass}>{btnIcon}</button>
      </div>
      {isOpened && <div className="card-details">Details</div>}
    </div>
  );
};

export default Card;
