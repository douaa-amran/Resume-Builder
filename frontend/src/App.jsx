import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import BuilderPage from "./pages/BuilderPage";

function App() {
  return (
    <div className="container">
      <Routes>
        {/*<Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />*/}
        <Route path="/builder" element={<BuilderPage />} />
      </Routes>
    </div>
  );
}

export default App;
