import { PATH_PUBLIC } from "@/constants/router.const";
import { FC } from "react";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router-dom";
import { AsyncDev, AsyncHome } from "./element";
import AdminLayout from "@/layouts/admin";
import Dashboard from "@/pages/admin/dashboard";
import MainLayout from "@/layouts/main";
import Login from "@/pages/admin/login";

const routeList: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: PATH_PUBLIC.HOME,
        element: <AsyncHome />,
      },
    ],
  },
  {
    path: PATH_PUBLIC.ADMIN,
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: `${PATH_PUBLIC.ADMIN}/login`,
    element: <Login />,
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
