"use client"

import React from "react"
import { Button } from "./ui/button"
import { TimerIcon } from "@radix-ui/react-icons"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { usePathname, useRouter } from "next/navigation"

function Navbar() {
  const router = useRouter()
  const path = usePathname()
  const supabase = createClientComponentClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const isAuthPage = path === "/auth"

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <TimerIcon width={30} height={30} />
        <div className="text-2xl justify-center">
          <span className="font-medium">Time</span>
          <span className="font-bold">Log</span>
        </div>
      </div>
      {!isAuthPage && <Button onClick={handleLogout}>Logout</Button>}
    </div>
  )
}

export default Navbar
