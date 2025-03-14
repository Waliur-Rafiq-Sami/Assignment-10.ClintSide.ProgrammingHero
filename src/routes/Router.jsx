import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root";
import ErrorPage from "./../Error/ErrorPage";
import Home from "./../pages/public/Home";
import ArtAndCraft from "../pages/public/ArtAndCraft";
import PrivateRoute from "./PrivateRoute";
import AddItems from "./../components/AddItems";
import UpdateItem from "../components/UpdateItem";
import Login from "./../pages/public/Login";
import Register from "./../pages/public/Register";
import ViewCraft from "../pages/private/ViewCraft";
import Scrapbooking from "../pages/SubCatagory/Scrapbooking";
import PaperQuilingAndOrigamiPage from "../pages/SubCatagory/PaperQuilingAndOrigamiPage";
import Lampworking from "../pages/SubCatagory/Lampworking";
import GlassDying from "../pages/SubCatagory/GlassDying";
import GlassPainting from "../pages/SubCatagory/GlassPainting";
import AllArtAndCraft from "../pages/SubCatagory/AllArtAndCraft";
import CardMaking from "../pages/SubCatagory/cardMaking";

// https://test-rose-ten-12.vercel.app
// hhttps://test-rose-ten-12.vercel.app
// hhttps://test-rose-ten-12.vercel.app
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/artAndCraft",
        element: <ArtAndCraft />,
        children: [
          {
            path: "/artAndCraft/all",
            element: <AllArtAndCraft />,
            loader: () =>
              fetch("hhttps://test-rose-ten-12.vercel.app/artAndCraft"),
          },
          {
            path: "/artAndCraft/cardMaking",
            element: <CardMaking />,
            loader: () =>
              fetch(
                "hhttps://test-rose-ten-12.vercel.app/artAndCraft/Card Making"
              ),
          },
          {
            path: "/artAndCraft/scrapbooking",
            element: <Scrapbooking />,
            loader: () =>
              fetch(
                "hhttps://test-rose-ten-12.vercel.app/artAndCraft/Scrapbooking"
              ),
          },
          {
            path: "/artAndCraft/paperQuillingOrigami",
            element: <PaperQuilingAndOrigamiPage />,
            loader: () =>
              fetch(
                "hhttps://test-rose-ten-12.vercel.app/artAndCraft/Paper Quilling & Origami"
              ),
          },
          {
            path: "/artAndCraft/glassPainting",
            element: <GlassPainting />,
            loader: () =>
              fetch(
                "hhttps://test-rose-ten-12.vercel.app/artAndCraft/Glass Painting"
              ),
          },
          {
            path: "/artAndCraft/lampworking",
            element: <Lampworking />,
            loader: () =>
              fetch(
                "hhttps://test-rose-ten-12.vercel.app/artAndCraft/Lampworking"
              ),
          },
          {
            path: "/artAndCraft/glassDyingStaining",
            element: <GlassDying />,
            loader: () =>
              fetch(
                "hhttps://test-rose-ten-12.vercel.app/artAndCraft/Glass Dying & Staining"
              ),
          },
        ],
      },
      {
        path: "/addItem",
        element: <PrivateRoute />,
        children: [
          {
            path: "/addItem",
            element: <AddItems />,
          },
        ],
      },
      {
        path: "/viewItem",
        element: <PrivateRoute />,
        children: [
          {
            path: "/viewItem",
            element: <ViewCraft />,
            // loader: ({ params }) => {
            //   fetch(`hhttps://test-rose-ten-12.vercel.app/artAndCraft/addList/${params.id}`);
            // },
          },
        ],
      },
      {
        path: "/update/:id",
        element: <PrivateRoute />,
        children: [
          {
            path: "/update/:id",
            element: <UpdateItem />,
            loader: ({ params }) =>
              fetch(`hhttps://test-rose-ten-12.vercel.app/update/${params.id}`),
          },
        ],
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
