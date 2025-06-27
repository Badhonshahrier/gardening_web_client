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
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import Details from "../Components/Details";
import Dashboard from "../Components/Dashboard";
import Overview from "../Components/Overview";

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
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        ),
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
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        ),
        Component: ExploreGardeners,
      },
      {
        path: "/sharegardentip",
        element: (
          <PrivateRoutes>
            <ShareGardenTip></ShareGardenTip>
          </PrivateRoutes>
        ),
      },
      {
        path: "/browsetippage",
        loader: () => fetch("https://gardening-assignment-server.vercel.app/sharetips"),
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        ),
        Component: TipTableRow,
      },
      {
        path: "/details/:id",
        loader: () => fetch("https://gardening-assignment-server.vercel.app/sharetips"),
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        ),
        element: (
          <PrivateRoutes>
            <TipDetails></TipDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mytips",
        loader: () => fetch("https://gardening-assignment-server.vercel.app/sharetips"),
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        ),
        element: (
          <PrivateRoutes>
            <MyTips></MyTips>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updatetips/:id",
        loader: ({ params }) =>
          fetch(`https://gardening-assignment-server.vercel.app/sharetips/${params.id}`),
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        ),
        element: (
          <PrivateRoutes>
            <UpdateTips></UpdateTips>
          </PrivateRoutes>
        ),
      },
      {
        path: "/exploredetails/:id",
        Component: Details,
        loader: ({ params }) =>
          fetch(`https://gardening-assignment-server.vercel.app/gardeners/${params.id}`),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: "overview",
            element: <Overview />,
          },

        ],
      },
    ],
  },
]);
