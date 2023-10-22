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

  // TODO Fix the card appears when date boxes hovered
  return (
    <div className="flex flex-wrap justify-center border-[1px] border-solid gap-2 p-10 rounded-md">
      {getDateInMonth().map((date, index) => {
        return (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <div className="h-5 w-5 bg-gray-100 rounded-sm cursor-pointer"></div>
            </HoverCardTrigger>
            <HoverCardContent>0 hours on {date}</HoverCardContent>
          </HoverCard>
        )
      })}
    </div>
  )
}

export default Calendar
