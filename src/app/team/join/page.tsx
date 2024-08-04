"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { joinTeam } from "../action";

export default function JoinPopup() {
	const [error, setError] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		const data = await joinTeam(form);
		if (data.error) {
			setError("Invalid team code");
		}

		toast({
			title: "✨ Team join request sent!",
			description: "Ask your team moderator to accept",
		});
	};

	return (
		<>
			<div className="flex items-center justify-center">
				<Card className="w-full sm:w-[500px] h-auto sm:h-[400px] p-6">
					<CardHeader>
						<CardTitle>Join an existing team</CardTitle>
						<CardDescription>
							Enter the team code to join your team.
						</CardDescription>
					</CardHeader>
					<CardContent>
						{error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
						<form onSubmit={onSubmit}>
							<div className="items-center gap-4">
								<Label htmlFor="teamCode">Code</Label>
								<Input
									id="teamCode"
									name="teamCode"
									type="text"
									className="mt-2"
									placeholder="Enter Team Code"
								/>
							</div>
							<Button type="submit" className="mt-4">
								Join
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
