"use client"

import useLogStore, { Log } from "@/store"
import { useRef } from "react"

function InıtLog({ logs }: { logs: Log[] }) {
  const initRef = useRef<boolean>()

  const prepareLog = () => {
    const result: {
      [key: string]: Log
    } = {}

    logs.forEach((log) => {
      result[log.date as string] = { ...log, date: new Date(log.date) }
    })

    return result
  }

  if (!initRef.current) {
    useLogStore.setState({
      logs: prepareLog(),
    })
    initRef.current = true
  }

  return null
}

export default InıtLog
