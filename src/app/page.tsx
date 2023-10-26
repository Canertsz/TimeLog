import React from "react"
import Navbar from "@/components/Navbar"
import NewLog from "@/components/NewLog"
import Calendar from "@/components/Calendar"
import Logs from "@/components/Logs"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import InıtLog from "@/components/state/InıtLog"
import { Log } from "@/store"

// TODO Remove log feature
// TODO Beautify the login page, add some screenshots of dashboard

export default async function page() {
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return redirect("/auth")
  }

  const { data: logs } = await supabase
    .from("Logs")
    .select("*")
    .order("date", { ascending: true })

  console.log(logs)

  return (
    <div className="p-5 space-y-10">
      <InıtLog logs={logs as Log[]} />
      <Navbar />
      <NewLog />
      <Calendar />
      <Logs />
    </div>
  )
}
