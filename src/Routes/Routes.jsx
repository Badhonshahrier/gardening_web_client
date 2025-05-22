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
import MyTips from "../Pages/MyTips";
import UpdateTips from "../Pages/UpdateTips";
import InstrumentSection from "../Components/InstrumentSection";

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
      {
        path: "/mytips",
        loader: () => fetch("http://localhost:3000/sharetips"),
        Component: MyTips,
      },
      {
        path: "/updatetips/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sharetips/${params.id}`),
        Component: UpdateTips,
      },
      
      
    ],
  },
]);
