import { Navigate } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      {
        path: "search",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      { path: "/", element: <Navigate to="/app/search" /> },
    ],
  },
];

export default routes;
