import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/server";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Explore() {
	const supabase = createClient();
	let { data: games, error } = await supabase.from("games").select("*");

	return (
		<div className="flex flex-col gap-4">
			<div>
				<h1 className="text-3xl font-bold tracking-tight mt-12">Find a game</h1>
				<h2 className="text-sm text-muted-foreground">
					Select your team requirements and get involved now!
				</h2>
			</div>

			<div>
				<Input placeholder="Search" className="shadow-sm" />
			</div>
			{/* table */}
			<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
				{/* @ts-ignore */}
				<DataTable columns={columns} data={games} />
			</div>
		</div>
	);
}
