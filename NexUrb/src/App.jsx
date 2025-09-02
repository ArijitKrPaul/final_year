import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardComponent from "./components/dashboardComponent";
import ProjectComponent from "./components/projectComponent";
import RegistrationComponent from "./components/registrationComponent";
import Login from "./components/loginComponent";
import InventoryComponent from "./components/inventory";
import HomeComponent from "./components/home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeComponent />,
    },
    {
      path: "/login",
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
    {
      path: "/home/inventory",
      element: <InventoryComponent />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
