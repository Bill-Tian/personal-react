import { Navigate, RouteObject } from "react-router-dom";

import Home from "@/views/home/index";
import Blog from "@/views/blog/index";
import Archive from "@/views/archive/index";
import Music from "@/views/music/index";
import About from "@/views/about/index";

const routes: RouteObject[] = [
  //   {
  //     path: "/",
  //     element: <Navigate to="/" replace />,
  //   },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
