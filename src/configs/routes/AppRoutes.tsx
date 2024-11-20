import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../../components/LoginPage";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
     
        
    },
    
]);

function AppRoutes() {
    return <RouterProvider router={router} />
}

export default AppRoutes;