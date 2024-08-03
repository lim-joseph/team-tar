import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/supabase/server";
import { Plus } from "lucide-react";
import { DatePicker } from "./date-picker";

export function CreateGame() {
	const supabase = createClient();

	async function createGame() {
		const { data, error } = await supabase
			.from("games")
			.insert([{ some_column: "someValue", other_column: "otherValue" }])
			.select();
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="flex justify-start gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary  mt-4 hover:bg-neutral-200 active:bg-neutral-300"
				>
					<Plus className="h-4 w-4" />
					Create a game
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				{/* header */}
				<DialogHeader>
					<DialogTitle>Create a game</DialogTitle>
					<DialogDescription>
						Make changes to your game here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>

				{/* body */}
				<div className="grid gap-4 pt-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input id="name" className="col-span-3" />
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="description" className="text-right">
							Description
						</Label>
						<Input id="username" className="col-span-3" />
					</div>
				</div>

				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="sport" className="text-right">
						Sport
					</Label>
					<Input id="name" className="col-span-3" />
				</div>

				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="date" className="text-right">
						Date
					</Label>
					<DatePicker />
				</div>

				<div className="grid grid-cols-2 items-center gap-4">
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Level" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Beginner">Beginner</SelectItem>
							<SelectItem value="Intermediate">Intermediate</SelectItem>
							<SelectItem value="Advanced">Advanced</SelectItem>
						</SelectContent>
					</Select>

					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Gender" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Male">Male</SelectItem>
							<SelectItem value="Female">Female</SelectItem>
							<SelectItem value="Mixed">Mixed</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{/* footer */}
				<DialogFooter>
					<Button type="submit">Create game</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
