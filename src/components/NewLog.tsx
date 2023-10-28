"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./ui/datePicker"
import { PlusCircle } from "@phosphor-icons/react"
import { useToast } from "./ui/use-toast"
import useLogStore from "@/store"
import dayjs from "dayjs"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

function NewLog() {
  const log = useLogStore((state) => state.log)
  const logs = useLogStore((state) => state.logs)
  const setLog = useLogStore((state) => state.setLog)
  const setLogs = useLogStore((state) => state.setLogs)

  const { toast } = useToast()
  const supabase = createClientComponentClient()

  const validateLog = () => {
    if (!log.date || !log.note || log.hour === 0) {
      throw "Hour or note cannot be empty"
    } else if (log.hour >= 24) {
      throw "Please enter a valid hour"
    }
  }

  const submitLog = async () => {
    try {
      validateLog()

      const date = log.date as Date

      const { error } = await supabase
        .from("Logs")
        .upsert({ ...log, date: dayjs(date).format("DD-MM-YYYY") })
        .select("*")
        .single()
      if (!error) {
        setLogs(log, dayjs(date).format("DD-MM-YYYY"))
        toast({
          variant: "success",
          title: "Log created successfully!",
          description: `${log.hour} hour in ${date.toDateString()}`,
        })
        closeDialog()
      } else {
        toast({
          variant: "destructive",
          title: "Failed to create log",
          description: error.message,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to create log",
        description: error as string,
      })
    }
  }

  // A little trick for closing modal when user clicks the save button.
  // This needed because there is no built in action to make this happen.
  const closeDialog = () => {
    document.getElementById("close-btn")?.click()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="flex items-center justify-center w-full sm:w-72 
          border-dashed border py-3 rounded-md cursor-pointer 
        border-zinc-400 transition-all dark:border-zinc-700"
        >
          <PlusCircle size={20} color="#a1a1aa" weight="regular" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
            Remember, time is your most valuable asset - invest it wisely with
            our TimeLog App!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date{" "}
            </Label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Hour
            </Label>
            <Input
              id="hour"
              type="number"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              placeholder="Amount of hour you spend"
              value={log.hour}
              onChange={(e) =>
                setLog({ ...log, hour: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input
              id="note"
              defaultValue="@peduarte"
              className="col-span-3"
              placeholder="Note for the log"
              value={log.note}
              onChange={(e) => setLog({ ...log, note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitLog}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default NewLog
