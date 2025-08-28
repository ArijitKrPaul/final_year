import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardComponent from "./components/dashboardComponent";
import ProjectComponent from "./components/projectComponent";
import RegistrationComponent from "./components/registrationComponent";
import Login from "./components/loginComponent";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
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
