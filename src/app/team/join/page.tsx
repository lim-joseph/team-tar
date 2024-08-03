"use client";
import {joinTeam} from "../action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {useState} from "react";
export default function JoinPopup() {
  const [error, setError] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = await joinTeam(form);
    if (data.error) {
      setError("Invalid team code");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Card className="w-full sm:w-[500px] h-auto sm:h-[400px] p-6">
          <CardHeader>
            <CardTitle>Join Team</CardTitle>
            <CardDescription>
              Enter the team code to join your team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
            <form onSubmit={onSubmit}>
              <div className="items-center gap-4 mt-4">
                <Label htmlFor="teamCode">Code</Label>
                <Input
                  id="teamCode"
                  name="teamCode"
                  type="text"
                  className="mt-4"
                  placeholder="Enter Team Code"
                />
              </div>
              <Button type="submit" className="mt-12">
                Join
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
