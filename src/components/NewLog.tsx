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
import { PlusIcon } from "@radix-ui/react-icons"
import { DatePicker } from "./ui/datePicker"

export function NewLog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="flex items-center justify-center w-full sm:w-72 
          border-dashed border py-3 rounded-md cursor-pointer 
          hover:border-zinc-400 transition-all"
        >
          <PlusIcon width={20} height={20} />
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
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
