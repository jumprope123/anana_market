import { createBrowserRouter, Navigate } from "react-router-dom";

import { Test } from "./pages/test/test";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
  { path: "*", element: <Navigate to={"/"} replace /> },
]);

export default router;
