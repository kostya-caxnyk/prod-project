import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageLazy } from "./pages/main-page/main-page.lazy";
import { AboutPageLazy } from "./pages/about-page/about-page.lazy";
import { Theme, useThemeContext } from "./theme/ThemeContext";
import useTheme from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { theme: true })}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to="/about">About Page</Link> <Link to="/">Main Page</Link>
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}
