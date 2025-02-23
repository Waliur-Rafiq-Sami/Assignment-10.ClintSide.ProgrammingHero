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
        loader: () => fetch("http://localhost:5000/artAndCraft"),
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
            //   fetch(`http://localhost:5000/addList/${params.id}`);
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
              fetch(`http://localhost:5000/update/${params.id}`),
          },
        ],
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
