import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type Game = {
	name: string;
	description: string;
	sport: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	gender: "Male" | "Female" | "Mixed";
	date: Date;
};

export const columns: ColumnDef<Game>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "description",
		header: "Description",
	},
	{
		accessorKey: "sport",
		header: "Sport",
	},
	{
		accessorKey: "level",
		header: "Level",
	},
	{
		accessorKey: "gender",
		header: "Gender",
	},
	// {
	// 	accessorKey: "creatorId",
	// 	header: "Creator",
	// },
	{
		accessorKey: "date",
		header: "Date",
	},
	{
		id: "details",
		cell: ({ row }) => {
			const payment = row.original;
			return <Button>Details</Button>;
		},
	},
];
