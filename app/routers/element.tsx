import { lazy } from "react";

//Dev component
export const AsyncDev = lazy(() => import("@/pages/dev"));

export const AsyncHome = lazy(() => import("@/pages/home"));
