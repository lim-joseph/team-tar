import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogOverlay,
	DialogTrigger,
} from "@/components/ui/dialog"; // Ensure you have these components or a similar modal library
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { registerTeam } from "./action";
export default function CreateTeamModal() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTrigger asChild>
					<Button onClick={() => setIsOpen(true)}>Start a new team</Button>
				</DialogTrigger>
				<DialogOverlay />
				<DialogContent className="max-w-screen-xl">
					<Card>
						<CardHeader>
							<CardTitle className="bg-orange-400 w-full text-white p-12 text-5xl">
								Create Your New Team
							</CardTitle>
							<CardDescription className="mt-4 ml-12">
								Fill the form to create your team
							</CardDescription>
						</CardHeader>
						<form action={registerTeam}>
							<CardContent>
								{/* input box for the team name */}
								<div className="ml-12 text-xl">
									<Label>Team Name</Label>
									<Input
										id="teamName"
										type="text"
										placeholder="Enter Your Team Name"
										className="mt-4 w-3/5 max-w-screen-xl"
										required
										name="teamName"
									></Input>
								</div>

								{/* input box for the team description */}
								<div className="mt-12 ml-12 text-xl">
									<Label>Team Description</Label>
									<Input
										id="teamDescription"
										type="text"
										placeholder="Enter Your Description"
										className="mt-4 w-3/5 max-w-screen-xl"
										name="teamDescription"
									></Input>
								</div>

								{/* selection box for the team sport type */}
								<div className="mt-12 ml-12 text-xl">
									<Label>Sport Selection</Label>
									<Select name="sport">
										<SelectTrigger className="mt-4 w-3/5 max-w-screen-xl">
											<SelectValue placeholder="Select sport" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Sports</SelectLabel>
												<SelectItem value="Basketball">Basketball</SelectItem>
												<SelectItem value="Soccer">Soccer</SelectItem>
												<SelectItem value="Badminton">Badminton</SelectItem>
												<SelectItem value="Volleyball">Volleyball</SelectItem>
												<SelectItem value="Swimming">Swimming</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>

								{/* input box for the location postcode */}
								<div className="mt-12 ml-12 text-xl">
									<Label>Postcode</Label>
									<Input
										id="postcode"
										type="number"
										placeholder="Enter Your Postcode"
										min="0200"
										className="mt-4 w-3/5 max-w-screen-xl"
										name="postcode"
									></Input>
								</div>
							</CardContent>
							<CardFooter>
								<Button type="submit" className="bg-lime-600 ml-12 mt-8">
									Create Team
								</Button>
							</CardFooter>
						</form>
					</Card>
				</DialogContent>
			</Dialog>
		</div>
	);
}
