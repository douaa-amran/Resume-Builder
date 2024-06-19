import { useState } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import BuilderPage from "./pages/BuilderPage";
import ProtectedRoute from "./components/ProtectedRoute";
import FileUpload from "./components/FileUpload";

function App() {
  const location = useLocation();

  const isLoginRoute =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div
      className={`${
        isLoginRoute
          ? "bg-[#8E3E63] min-h-screen flex justify-center items-center"
          : "container"
      }`}
    >
      <Routes>
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
