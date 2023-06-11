import React from "react";
import { Routes, Route } from "react-router-dom";

import InnerContent from "./components/InnerContent";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

type Props = {};

function MainRoutes({}: Props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InnerContent />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
