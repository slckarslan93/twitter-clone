import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Expolore from "../Pages/explore";
import Notifications from "../Pages/notifications";
import MainLayout from "../layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Expolore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);

export default routes;
