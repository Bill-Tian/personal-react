
import { Navigate, RouteObject } from "react-router-dom";

import Home from "@/views/home/index";
import Work from "@/views/work/index";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/home" replace />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/work',
        element: <Work />
    },
]

export default routes