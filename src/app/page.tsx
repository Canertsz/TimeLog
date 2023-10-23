import React from "react"
import Navbar from "@/components/Navbar"
import NewLog from "@/components/NewLog"
import Calendar from "@/components/Calendar"
import Logs from "@/components/Logs"

export default function page() {
  return (
    <div className="p-5 space-y-10">
      <Navbar />
      <NewLog />
      <Calendar />
      <Logs />
    </div>
  )
}
