import React from "react";
import Home from "./pages/Home";
import Obrigado from "./pages/Obrigado";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/obrigado" element={<Obrigado />} />
    </Routes>
  );
};

export default App;
