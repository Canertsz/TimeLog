"use client"

import Navbar from "@/components/Navbar"
import React from "react"
import { Button } from "@/components/ui/button"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

function page() {
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
    <div className="p-5">
      <Navbar />
      <div className="flex justify-center items-center h-80vh">
        <div className="text-center space-y-5">
          <p className="max-w-md">
            Remember, time is your most valuable asset - invest it wisely with
            our TimeLog App!
          </p>
          <Button onClick={handleLogin}>Login with github</Button>
        </div>
      </div>
    </div>
  )
}

export default page
