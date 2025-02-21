import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Verification>
      <RouterProvider router={router} />
    </Verification>
  </StrictMode>
);
