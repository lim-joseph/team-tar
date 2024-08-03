import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Game } from "../columns";

export function GameDetails({ game }: { game: Game }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Details</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">{game.name}</DialogTitle>
					<DialogDescription>{game.description}</DialogDescription>
				</DialogHeader>
				<div className="grid gap-6 py-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-1">
							<div className="text-sm font-medium">Sport</div>
							<Input value={game.sport} disabled className="text-black" />
						</div>
						<div className="space-y-1">
							<div className="text-sm font-medium">Level</div>
							<Input
								value={game.level}
								disabled
								className="text-black opacity-100"
							/>
						</div>
						<div className="space-y-1">
							<div className="text-sm font-medium">Gender</div>
							<Input
								value={game.gender}
								disabled
								className="text-black opacity-100"
							/>
						</div>
						<div className="space-y-1">
							<div className="text-sm font-medium">Date & Time</div>
							<Input
								value={game.date}
								disabled
								className="text-black opacity-100"
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-1">
							<div className="text-sm font-medium">Organizer</div>
							<Input
								value="Local Basketball Association"
								disabled
								className="text-black opacity-100"
							/>
						</div>
					</div>
					<div className="flex gap-4">
						<Button>Join</Button>
						<Button variant="outline">Contact Organizer</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
