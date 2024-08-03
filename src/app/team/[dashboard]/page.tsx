import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function test({
	params,
}: {
	params: { dashboard: string };
}) {
	const { dashboard } = params;

	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error) {
		redirect("/login");
	}

	// Pass data to the
	return (
		<div className="flex grid flex-wrap mx-auto grid-cols-2 gap-8">
			{/* Left Section*/}
			<Card className="w-full sm:w-[600px] h-full sm:h-[800px]">
				<CardHeader>
					<CardTitle>Active Sport Competition</CardTitle>
					<CardDescription>
						List of Ongoing Competition for the team
						<div className="border-t border-gray-300 my-4" />
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow className="bg-accent">
								<TableHead>Match Name</TableHead>
								<TableHead>Time</TableHead>
								<TableHead>Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>
									<div>gudasfasdfasd</div>
								</TableCell>
								<TableCell>
									<div>gu</div>
								</TableCell>
								<TableCell>
									<div>gu</div>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			<div className="flex flex-col">
				{/* Button Section */}
				<div className="mb-4 flex flex-wraps">
					<div className="mt-2">Invite:</div>
					<Button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
						Click Me
					</Button>
				</div>

				<div className="grid grid-rows-2 gap-4">
					{/* Top Right Section*/}
					<Card className="h-auto sm:h-[300px]">
						<CardHeader>
							<CardTitle>Team Member</CardTitle>
							<CardDescription>
								List of members in the team
								<div className="border-t border-gray-300 my-4" />
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div>Caleb</div>
							<div className="mt-4">Kenneth</div>
							<div className="mt-4">Joesph</div>
						</CardContent>
					</Card>

					{/* Buttom Right Card*/}
					<Card>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card Description</CardDescription>
						</CardHeader>
						<CardContent></CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
