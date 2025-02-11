import { createBrowserRouter, Navigate } from "react-router-dom";

import { ROUTER_PATH } from "./constants/router-path";
import { UserManagement } from "./pages/user-management";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ROUTER_PATH.USER_MANAGEMENT,
        element: <UserManagement />,
      },
    ],
  },
  { path: "*", element: <Navigate to={ROUTER_PATH.USER_MANAGEMENT} replace /> },
]);

export default router;
