"use client"

import React from "react"
import dayjs from "dayjs"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card"

function Calendar() {
  const getDateInMonth = (year = dayjs().year(), month = dayjs().month()) => {
    const startDate = dayjs().year(year).month(month).date(1)
    const endDate = startDate.endOf("month")

    const dates = []

    for (let i = startDate.date(); i <= endDate.date(); i++) {
      dates.push(startDate.date(i).format("DD-MM-YYYY"))
    }

    return dates
  }

  return (
    <div className="flex flex-wrap justify-center border-[1px] border-solid gap-2 p-10 rounded-md">
      {getDateInMonth().map((date, index) => {
        return (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <div className="h-5 w-5 bg-gray-100 rounded-sm cursor-pointer"></div>
            </HoverCardTrigger>
            <HoverCardContent
              className="z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground 
              shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out 
              data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
              data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
              data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            >
              0 hours on {date}
            </HoverCardContent>
          </HoverCard>
        )
      })}
    </div>
  )
}

export default Calendar
