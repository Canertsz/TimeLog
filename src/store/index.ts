import { create } from "zustand"

export type Log = {
  note: string
  hour: number
  date: Date
}

export type ResultLog = {
  note: string
  hour: number
  date: string
}

interface LogState {
  log: Log
  logs: {
    [key: string]: Log
  }
  setDate: (date: Date) => void
  setLog: (log: Log) => void
  setLogs: (log: Log, key: string) => void
}

interface Theme {
  theme: string
  toggleTheme: () => void
}

const useLogStore = create<LogState>()((set) => ({
  log: {
    note: "",
    hour: 0,
    date: new Date(),
  },
  logs: {},
  setDate: (date: Date) => set((state) => ({ log: { ...state.log, date } })),
  setLog: (log: Log) => set((state) => ({ log: { ...state.log, ...log } })),
  setLogs: (log: Log, key: string) =>
    set((state) => {
      const updateLog = { ...state.logs, [key]: log }
      const sortedKeys = Object.keys(updateLog).sort()

      const sortObject: {
        [key: string]: Log
      } = {}

      for (const key of sortedKeys) {
        sortObject[key] = updateLog[key]
      }

      return { logs: sortObject }
    }),
}))

export const useThemeStore = create<Theme>((set) => ({
  theme: localStorage.getItem("theme") || "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light"
      localStorage.setItem("theme", newTheme)
      return { theme: newTheme }
    }),
}))

export default useLogStore
