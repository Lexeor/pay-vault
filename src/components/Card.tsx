import { useState } from "react";

type CardProps = {};

const Card = (props: CardProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className="card" onClick={handleOpen}>
      <div className="card-body">
        <div className="card-icon">
          <i className="ri-flashlight-line icon"></i>
        </div>
        <div className="card-header">
          <p>Service Name</p>
          <p>Service Provider</p>
        </div>
        <button>$</button>
      </div>
      {isOpened && <div className="card-details">Details</div>}
    </div>
  );
};

export default Card;
