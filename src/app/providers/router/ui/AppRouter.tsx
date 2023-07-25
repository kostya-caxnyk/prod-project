import { AboutPageLazy } from "pages/AboutPage";
import { MainPageLazy } from "pages/MainPage";
import React, { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { routes } from "shared/config/routeConfig/routeConfig";

function AppRouter() {
  return (
    <Suspense fallback={"loading..."}>
      <div className="page-wrapper">{useRoutes(routes)}</div>
    </Suspense>
  );
}

export default AppRouter;
