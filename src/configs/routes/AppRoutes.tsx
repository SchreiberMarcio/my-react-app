import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../../pages/LoginPage";

import { Profile } from "../../pages/Profile";
import Explore from "../../pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Explore",
    element: <Explore/>
  },

  {
    path: "/Profile",
    element:<Profile/>
  }
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
