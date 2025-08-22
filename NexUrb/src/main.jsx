import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ProjectComponent from "./components/projectComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProjectComponent />
  </StrictMode>
);
