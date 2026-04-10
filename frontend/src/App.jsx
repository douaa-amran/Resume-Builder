import { useState } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import BuilderPage from "./pages/BuilderPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import FileUpload from "./components/FileUpload";

function App() {
  const location = useLocation();

  const isLoginRoute =
    location.pathname === "/login" || location.pathname === "/register";

  const isHomeRoute = location.pathname === "/";

  return (
    <div
      className={`${
        isLoginRoute || isHomeRoute
          ? "w-screen h-screen flex justify-center items-center overflow-hidden"
          : "container"
      }`}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
              <Login />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/ExtractJson" element={<FileUpload />} />
      </Routes>
    </div>
  );
}

export default App;
