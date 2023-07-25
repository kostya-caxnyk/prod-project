import { AboutPageLazy } from "pages/AboutPage";
import { MainPageLazy } from "pages/MainPage";
import React, { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { routes } from "shared/config/routeConfig/routeConfig";

function AppRouter() {
  return <Suspense fallback={"loading..."}>{useRoutes(routes)}</Suspense>;
}

export default AppRouter;
