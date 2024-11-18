import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../pages/Login";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
        
    },
    
]);

function AppRoutes() {
    return <RouterProvider router={router} />
}

export default AppRoutes;