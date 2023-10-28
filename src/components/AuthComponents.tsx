"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { TimerIcon } from "lucide-react"
import Image from "next/image"
import { useThemeStore } from "@/store"

function AuthComponent() {
  const { theme } = useThemeStore()

  const supabase = createClientComponentClient()

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="flex flex-col justify-center items-center text-center h-80vh space-y-10 mt-20 dark:text-white">
      <div className="flex items-center">
        <TimerIcon width={30} height={30} />
        <div className="text-2xl justify-center">
          <span className="font-medium">Time</span>
          <span className="font-bold">Log</span>
        </div>
      </div>
      <p className="font-bold text-2xl max-w-xl">
        Remember, time is your most valuable asset - invest it wisely with our
        TimeLog App!
      </p>
      <Image
        alt="TimeLog"
        src="/TimeLog.png"
        width={773}
        height={420}
        className="shadow-xl rounded-lg dark:shadow-zinc-700 dark:shadow-4xl"
        unoptimized={true}
      />
      <Button
        variant={theme === "dark" ? "secondary" : "default"}
        onClick={handleLogin}
      >
        Login with github
      </Button>
    </div>
  )
}

export default AuthComponent
