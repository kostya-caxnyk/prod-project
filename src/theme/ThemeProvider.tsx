import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, themeContext } from "./ThemeContext";

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT
  );

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
