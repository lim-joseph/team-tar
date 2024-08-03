"use client";

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
import { createClient } from "@/lib/supabase/client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Game } from "../explore/columns";
import { DatePicker } from "./date-picker";

export function CreateGame() {
	const supabase = createClient();

	const [game, setGame] = useState({
		name: "",
		description: "",
		sport: "",
		level: "Beginner",
		gender: "Mixed",
	});

	const handleChange = (field: keyof Game, value: any) => {
		setGame((prevState) => ({
			...prevState,
			[field]: value,
		}));
	};

	const handleSubmit = async () => {
		const { data, error } = await supabase
			.from("games")
			.insert([game])
			.select();

		if (error) {
			console.error("Error creating game", error);
			return;
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="flex justify-start gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary mt-4 hover:bg-neutral-200 active:bg-neutral-300"
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
						<Input
							id="name"
							className="col-span-3"
							value={game.name}
							onChange={(e) => handleChange("name", e.target.value)}
						/>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="description" className="text-right">
							Description
						</Label>
						<Input
							id="description"
							className="col-span-3"
							value={game.description}
							onChange={(e) => handleChange("description", e.target.value)}
						/>
					</div>
				</div>

				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="sport" className="text-right">
						Sport
					</Label>
					<Input
						id="sport"
						className="col-span-3"
						value={game.sport}
						onChange={(e) => handleChange("sport", e.target.value)}
					/>
				</div>

				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="date" className="text-right">
						Date
					</Label>
					<DatePicker />
				</div>

				<div className="grid grid-cols-2 items-center gap-4">
					<Select onValueChange={(value) => handleChange("level", value)}>
						<SelectTrigger>
							<SelectValue placeholder="Level" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="beginner">Beginner</SelectItem>
							<SelectItem value="intermediate">Intermediate</SelectItem>
							<SelectItem value="advanced">Advanced</SelectItem>
						</SelectContent>
					</Select>

					<Select onValueChange={(value) => handleChange("gender", value)}>
						<SelectTrigger>
							<SelectValue placeholder="Gender" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="male">Male</SelectItem>
							<SelectItem value="female">Female</SelectItem>
							<SelectItem value="mixed">Mixed</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{/* footer */}
				<DialogFooter>
					<Button type="submit" onClick={handleSubmit}>
						Create game
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
