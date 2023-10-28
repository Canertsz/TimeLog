"use client"

import React from "react"
import { Button } from "./ui/button"
import { TimerIcon } from "@radix-ui/react-icons"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { usePathname, useRouter } from "next/navigation"
import { useThemeStore } from "@/store"

function Navbar() {
  const { theme } = useThemeStore()

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
        <TimerIcon width={30} height={30} className="dark:text-white" />
        <div className="text-2xl justify-center dark:text-white">
          <span className="font-medium">Time</span>
          <span className="font-bold">Log</span>
        </div>
      </div>
      {!isAuthPage && (
        <Button
          variant={theme === "dark" ? "secondary" : "default"}
          onClick={handleLogout}
        >
          Logout
        </Button>
      )}
    </div>
  )
}

export default Navbar
