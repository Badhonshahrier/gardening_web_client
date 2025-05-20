import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ExploreGardeners from "../Pages/ExploreGardeners ";
import ShareGardenTip from "../Components/ShareGardenTip";
import TipTableRow from "../Components/TipTableRow";
import TipDetails from "../Components/TipDetails";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/slider.json"),
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/explore-gardeners",
        Component: ExploreGardeners,
      },
      {
        path: "/sharegardentip",
        Component: ShareGardenTip,
      },
      {
        path: "/browsetippage",
        loader: () => fetch("http://localhost:3000/sharetips"),
        Component: TipTableRow,
      },
      {
        path: "/details/:id",
        loader: () => fetch("http://localhost:3000/sharetips"),
        Component: TipDetails,
      },
    ],
  },
]);
