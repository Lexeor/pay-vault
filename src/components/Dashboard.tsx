import React from "react";
import Card from "./Card";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="content">
      <h1>Dashboard</h1>
      <h4>June 2023</h4>
      <Card />
    </div>
  );
}

export default Dashboard;
