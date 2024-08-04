"use client";

import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { CreateGame } from "./_create-game/page";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function Explore() {
	const [tableGames, setTableGames] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredItems, setFilteredItems] = useState([]);
	const supabase = createClient();

	async function fetchGames() {
		let { data: games, error } = await supabase
			.from("games")
			.select("*")
			.order("created_at", { ascending: false });

		setTableGames(games);
		setFilteredItems(games);
	}

	useEffect(() => {
		fetchGames();
	});

	useEffect(() => {
		if (filteredItems) {
			setFilteredItems(
				filteredItems.filter((item) =>
					item.name.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
		}
	}, [searchTerm, tableGames]);

	const channels = supabase
		.channel("custom-all-channel")
		.on(
			"postgres_changes",
			{ event: "*", schema: "public", table: "games" },
			(payload) => {
				fetchGames();
			}
		)
		.subscribe();

	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between items-end">
				<div>
					<h1 className="text-3xl font-bold tracking-tight mt-12">
						Find a game
					</h1>
					<h2 className="text-sm text-muted-foreground">
						Select your team requirements and get involved now!
					</h2>
				</div>
				<CreateGame className="bg-white mb-2" />
			</div>

			<div>
				<Input
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Search"
					className="shadow-sm"
				/>
			</div>
			{/* table */}
			<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
				{/* @ts-ignore */}
				<DataTable columns={columns} data={filteredItems} />
			</div>
		</div>
	);
}
