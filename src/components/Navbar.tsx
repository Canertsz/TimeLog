import React from "react"
import { Button } from "./ui/button"
import { TimerIcon } from "@radix-ui/react-icons"

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <TimerIcon width={30} height={30} />
        <div className="text-2xl justify-center">
          <span className="font-medium">Time</span>
          <span className="font-bold">Log</span>
        </div>
      </div>
      <Button>Logout</Button>
    </div>
  )
}

export default Navbar
