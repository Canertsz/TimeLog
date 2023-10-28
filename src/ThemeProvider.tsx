"use client"

import { useEffect } from "react"
import { useThemeStore } from "./store"

const ThemeProvider = ({ children }: any) => {
  const { theme } = useThemeStore()

  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "dark" : ""
  }, [theme])

  return <>{children}</>
}

export default ThemeProvider
