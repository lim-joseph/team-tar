import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function AccountPage() {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error) {
		redirect("/login");
	}

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold">
				{data.user?.user_metadata.username}'s account
			</h1>

			<div className="grid gap-6">
				<Card x-chunk="dashboard-04-chunk-1">
					<CardHeader>
						<CardTitle>Team name</CardTitle>
						<CardDescription>
							Used to identify your team for matches.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form>
							<Input placeholder="Store Name" />
						</form>
					</CardContent>
					<CardFooter className="border-t px-6 py-4">
						<Button>Save</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
