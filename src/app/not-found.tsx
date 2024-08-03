import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Compass, Wrench } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center">
			<Card className="w-[350px] rounded-lg">
				<CardHeader className="text-center">
					<Wrench className="mx-auto h-12 w-12 text-primary" />
					<CardTitle>Under Construction</CardTitle>
					<CardDescription>Coming soon!</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-center">
					<Link
						href="/explore"
						className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
						prefetch={false}
					>
						<Compass className="w-4 h-4 mr-2" />
						Explore
					</Link>
				</CardContent>
			</Card>
		</div>
	);
}
