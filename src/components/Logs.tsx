"use client"

import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useLogStore from "@/store"

function Logs() {
  const logs = useLogStore((state) => state.logs)

  const isEmpty = Object.keys(logs).length === 0

  return (
    <Table>
      <TableCaption className="dark:text-white dark:text-opacity-60">
        {isEmpty ? "No logs found" : "List of logs"}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Date</TableHead>
          <TableHead className="w-1/3">Hour</TableHead>
          <TableHead className="w-1/3">Note</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="dark:text-white">
        {Object.keys(logs).map((key) => {
          const log = logs[key]

          return (
            <TableRow key={key}>
              <TableCell className="font-medium">
                {log.date.toDateString()}
              </TableCell>
              <TableCell>{log.hour}</TableCell>
              <TableCell>{log.note}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default Logs
