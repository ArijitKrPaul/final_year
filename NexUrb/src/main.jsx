import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ProjectComponent from "./components/projectComponent.jsx";
import DashboardComponent from "./components/dashboardComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DashboardComponent />
  </StrictMode>
);
