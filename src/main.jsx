import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Verification from "./context/Verification";
import router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Verification>
      <RouterProvider router={router} />
    </Verification>
  </StrictMode>
);
