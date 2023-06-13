import React from "react";
import Card from "./Card";

import data from "../data/data";

type Props = {};

function Dashboard({}: Props) {
  const renderCards = data.map((card) => {
    return (
      <Card
        key={card.id}
        type={card.type}
        provider={card.provider}
        cost={card.cost}
        currency={card.currency}
        isPayed={card.isPayed}
      />
    );
  });

  return (
    <div className="content">
      <h1>Dashboard</h1>
      <h4>June 2023</h4>
      <div className="cards-wrapper">{renderCards}</div>
    </div>
  );
}

export default Dashboard;
