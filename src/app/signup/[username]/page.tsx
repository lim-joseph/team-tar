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
import MultipleSelector, { Option } from "@/components/ui/multple-selector";
import React, { useState } from "react";
import { addUserProfile } from "../action";
import { hobbies } from "./hobbies";
const OPTIONS: Option[] = hobbies.map((hobby) => ({
	label: hobby,
	value: hobby,
}));

export default function Profile({ params }: { params: { username: string } }) {
	const { username } = params;
	const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
	const [error, setError] = useState("");
	const [formData, setFormData] = useState({
		email: "",
		username: username,
		firstName: "",
		lastName: "",
		birthday: "",
		city: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[id]: value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const profileData = {
			username: formData.username,
			firstName: formData.firstName,
			lastName: formData.lastName,
			birthday: formData.birthday,
			city: formData.city,
			interest: { interest: selectedInterests },
		};
		const res = await addUserProfile(profileData);
		if (res?.error) {
			setError(res.error);
		}
	};

	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-xl">Profile</CardTitle>
				<CardDescription>
					Give us some information about yourself
				</CardDescription>
			</CardHeader>
			<CardContent>
				{error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Label htmlFor="firstName">First name</Label>
								<Input
									id="firstName"
									placeholder="Max"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="lastName">Last name</Label>
								<Input
									id="lastName"
									placeholder="Robinson"
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="birthday">Date of Birth</Label>
							<Input
								id="birthday"
								type="date"
								required
								value={formData.birthday}
								onChange={handleChange}
							/>
						</div>

						<div className="grid gap-2">
							<Label htmlFor="city">City</Label>
							<Input
								id="city"
								onChange={handleChange}
								placeholder="City"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="interests">Interests</Label>
							<MultipleSelector
								onChange={(option) =>
									setSelectedInterests(option.map((o) => o.value))
								}
								defaultOptions={OPTIONS}
								placeholder="What's your interest..."
								emptyIndicator={
									<p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
										no results found.
									</p>
								}
							/>
						</div>
						<Button type="submit" className="w-full">
							Next
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
