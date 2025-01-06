import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Member Login/Login";
import BecomeMember from "../Pages/BecomeMember/BecomeMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/joinAsMember",
        element: <BecomeMember />,
      },
    ],
  },
]);

export default router;
