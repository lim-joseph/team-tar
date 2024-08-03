import {joinTeam} from "../action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default async function JoinPopup() {
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button>Join</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Team</DialogTitle>
          <DialogDescription>
            Enter the team code to join your team
          </DialogDescription>
        </DialogHeader>
        <form action={joinTeam}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Code" className="text-right">
              Code
            </Label>
            <Input
              id="teamCode"
              type="text"
              className="col-span-3"
              placeholder="Enter Team Code"
            />
          </div>
        <DialogFooter>
          <Button type="submit">Join</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
      {/* <form action={joinTeam}>
        <input type="text" placeholder="Enter Team Code" name="teamCode" />
        <button type="submit">Join</button>
      </form> */}
    </>
  );
}
