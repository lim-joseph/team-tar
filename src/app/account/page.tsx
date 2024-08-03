import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {getProfile} from "./action"
import { Button } from "@/components/ui/button";
import {hobbies} from "../signup/[username]/hobbies";
import MultipleSelector, {Option} from "@/components/ui/multple-selector";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select";
  
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const OPTIONS: Option[] = hobbies.map((hobby) => ({
	label: hobby,
	value: hobby,
  }));

function formatDate(timestamp: Date) {
	const date = new Date(timestamp);
	const day = String(date.getUTCDate()).padStart(2, '0');
	const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
	const year = date.getUTCFullYear();
	const hours = String(date.getUTCHours()).padStart(2, '0');
	const minutes = String(date.getUTCMinutes()).padStart(2, '0');
	return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default async function AccountPage() {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error) {
		redirect("/login");
	}
	

	const user = await getProfile();

	console.log(`{ label: ${user.interest.interest}., value: ${user.interest.interest} }`);
	return (
		<div className="flex items-center justify-center min-h-screen">
			<Card className="w-full max-w-[800px] bg-white shadow-md">
				<CardHeader>
				<CardTitle>User Profile</CardTitle>
				<CardDescription>
					<div className="border-t border-gray-300 my-4" />
				</CardDescription>
				</CardHeader>
				<CardContent>
				<form>
					<div className="grid grid-cols-2 gap-2">
						<div className="grid gap-2">
							<Label htmlFor="firstName">First name</Label>
							<Input
							id="firstName"
							readOnly
							value={user.first_name}
							required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="lastName">Last name</Label>
							<Input
							id="lastName"
							value={user.last_name}
							readOnly
							required
							/>
						</div>
					</div>
					<div className="grid gap-2 mt-4">
						<Label htmlFor="userName">Username</Label>
						<Input
						id="userName"
						required
						readOnly
						className="w-full"
						value={user.username}
						></Input>
					</div>
					<div className="grid gap-2 mt-4">
						<Label htmlFor="city">City</Label>
						<Input
						id="city"
						readOnly
						required
						value={user.city}
						className="w-full"
						/>
					</div>
					<div className="grid gap-2 mt-4">
						<Label htmlFor="birthday">Birthday</Label>
						<Input
						id="birthday"
						required
						className="w-full"
						value={user.birthday}
						readOnly
						/>
					</div>
					<div className="grid gap-2 mt-4">
						<Label htmlFor="createdAt">Created At</Label>
						<Input
						id="create_at"
						required
						className="w-full"
						value={formatDate(user.created_at)}
						readOnly
						/>
					</div>
					<div className="grid gap-2 mt-4">
						<Label htmlFor="Interest">Interest</Label>
						<Input id="interest"
						value={user.interest.interest}
						readOnly></Input>
					</div>
				</form>
				</CardContent>
			</Card>
		</div>
	);
}