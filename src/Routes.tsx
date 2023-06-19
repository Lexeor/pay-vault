import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InnerContent from "./components/InnerContent";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

import ProtectedRoutes from "./components/ProtectedRoutes";

type Props = {};

function MainRoutes({}: Props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          {/* PROTECTED */}
          <Route path="/" element={<InnerContent />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* END PROTECTED */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
