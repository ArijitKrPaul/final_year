import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import InventoryComponent from "./components/inventory.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <InventoryComponent /> */}
  </StrictMode>
);
