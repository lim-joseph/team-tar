import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Package,
	Package2,
	ShoppingCart,
	Users,
} from "lucide-react";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "./logout/action";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata = {
	title: "teamStar",
	description: "Find local scrims",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased flex",
					fontSans.variable
				)}
			>
				<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
					<div className="hidden border-r bg-muted/40 md:block">
						<div className="flex h-full max-h-screen flex-col gap-2">
							<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
								<Link
									href="/"
									className="flex items-center gap-2 font-semibold"
								>
									<Package2 className="h-6 w-6" />
									<span className="">teamStar</span>
								</Link>
								<Button
									variant="outline"
									size="icon"
									className="ml-auto h-8 w-8"
								>
									<Bell className="h-4 w-4" />
								</Button>
							</div>
							<div className="flex-1">
								<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
									<Link
										href="#"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-primary bg-muted transition-all hover:text-primary"
									>
										<Home className="h-4 w-4" />
										Dashboard
									</Link>
									<Link
										href="#"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
									>
										<ShoppingCart className="h-4 w-4" />
										Explore
									</Link>
									<Link
										href="#"
										className="flex items-center gap-3 rounded-lg  px-3 py-2 text-muted-foreground transition-all hover:text-primary"
									>
										<Package className="h-4 w-4" />
										Team
									</Link>
									<Link
										href="#"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
									>
										<Users className="h-4 w-4" />
										History
									</Link>
									<Link
										href="#"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
									>
										<LineChart className="h-4 w-4" />
										Analytics
									</Link>
								</nav>
							</div>
							<div className="mt-auto p-4 gap-4 flex flex-col border-t">
								<div className="flex gap-4 items-center ">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant="secondary"
												size="icon"
												className="rounded-full"
											>
												<CircleUser className="h-5 w-5" />
												<span className="sr-only">Toggle user menu</span>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuLabel>My Account</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>Settings</DropdownMenuItem>
											<DropdownMenuItem>Support</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem>
												<form action={logout} method="post">
													<button type="submit">Logout</button>
												</form>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
									<div className="text-sm">
										<p className="font-bold">Joseph</p>
										<p className="text-muted-foreground">joseph@example.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
							<div
								className=" rounded-lg border border-dashed shadow-sm"
								x-chunk="dashboard-02-chunk-1"
							>
								<div className="flex flex-col gap-1 p-8">{children}</div>
							</div>
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
