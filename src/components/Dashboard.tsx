import { useEffect } from "react";
import Card from "./Card";
import { getUserInfo } from "../services/user.service";

import data from "../data/data";

function Dashboard() {
  const renderCards = data.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        type={card.type}
        provider={card.provider}
        cost={card.cost}
        currency={card.currency}
        isPayed={card.isPayed}
      />
    );
  });

  // useEffect(() => {
  //   getUserInfo().then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  return (
    <div className="content">
      <h1>Dashboard</h1>
      <h4>June 2023</h4>
      <div className="cards-wrapper">{renderCards}</div>
    </div>
  );
}

export default Dashboard;
