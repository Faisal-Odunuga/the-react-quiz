import { lazy } from "react";
import { allPaths } from "./path";

const Home = lazy(() => import("../pages/home"));

export const allRoutes = [
  {
    path: allPaths.home,
    element: Home,
  },
];
