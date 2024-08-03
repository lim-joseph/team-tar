import { ColumnDef } from "@tanstack/react-table";

type Game = {
	id: number;
	name: string;
	description: string;
	sport: string;
	level: "beginner" | "intermediate" | "advanced";
	gender: "male" | "female" | "mixed";
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
