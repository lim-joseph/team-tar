import { ColumnDef } from "@tanstack/react-table";

type Game = {
	id: number;
	name: string;
	description: string;
	sport: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	gender: "Male" | "Female" | "Mixed";
	creatorId: number;
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
	{
		accessorKey: "creatorId",
		header: "Creator",
	},
];
