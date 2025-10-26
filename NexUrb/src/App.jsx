import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardComponent from "../src/dashboard/dashboardComponent";
import ProjectComponent from "../src/project/projectComponent";
import RegistrationComponent from "../src/registration/registrationComponent";
import Login from "../src/login/loginComponent";
import InventoryComponent from "../src/inventory/inventory";
import HomeComponent from "./home/home";
import DepartmentsPage from "../src/contacts/contact";
import UserDetailsComponent from "../src/user/userdetails";

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
        {
      path: "/home/contact",
      element: <DepartmentsPage />,
    },
    {
      path: "/home/userdetails",
      element: <UserDetailsComponent />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
