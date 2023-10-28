import React from "react"
import Navbar from "@/components/Navbar"
import NewLog from "@/components/NewLog"
import Calendar from "@/components/Calendar"
import Logs from "@/components/Logs"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import InıtLog from "@/components/state/InıtLog"
import { ResultLog } from "@/store"
import { Switch } from "@/components/ui/switch"

export const dynamic = "force-dynamic"

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

  return (
    <div className="p-5 space-y-10">
      <InıtLog logs={logs as ResultLog[]} />
      <Navbar />
      <div className="flex items-center justify-between">
        <NewLog />
        <Switch />
      </div>
      <Calendar />
      <Logs />
    </div>
  )
}
