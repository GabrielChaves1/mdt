import dark from "@/styles/themes/dark";
import light from "@/styles/themes/light";
import { Context, ReactNode, createContext, useContext, useState } from "react";
import { DefaultTheme } from "styled-components";

interface ThemeContextProps {
  updateTheme: (theme: DefaultTheme) => void
  theme: DefaultTheme
}

const ThemeContext = createContext<ThemeContextProps>(null as any);

export const ThemeManager = ({ children }: { children: ReactNode }) => {
  const [ theme, setTheme ] = useState(localStorage.getItem("theme") === "light" ? light : dark);

  const updateTheme = (theme: DefaultTheme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme.title);
  }
  
  return (
    <ThemeContext.Provider value={{
      theme,
      updateTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeManager = () => useContext<ThemeContextProps>(ThemeContext as Context<ThemeContextProps>);