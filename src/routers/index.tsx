import { PATH_PUBLIC } from "@/constants/router.const";
import { FC } from "react";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router-dom";
import { AsyncDev, AsyncHome } from "./element";

const routeList: RouteObject[] = [
  {
    path: PATH_PUBLIC.HOME,
    element: <AsyncHome />,
  },
  {
    path: PATH_PUBLIC.DEV,
    element: <AsyncDev />,
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
