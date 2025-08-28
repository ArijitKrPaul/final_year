import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardComponent from "./components/dashboardComponent";
import ProjectComponent from "./components/projectComponent";
import RegistrationComponent from "./components/registrationComponent";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RegistrationComponent />,
    },
    {
      path: "/home",
      element: <DashboardComponent />,
    },
    {
      path: "/home/project",
      element: <ProjectComponent />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
