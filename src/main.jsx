import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' para versões mais recentes
import { BrowserRouter } from "react-router-dom"; // Importa o BrowserRouter
import App from "./App"; // Atualize para importar o componente App
import "./index.css"; // Importe o CSS global, se necessário

// Crie o root usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderize o componente App dentro do BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
