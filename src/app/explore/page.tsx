import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default async function Explore() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Find a game</h1>
				<h2 className="text-sm text-muted-foreground">
					Select your team requirements and get involved now!
				</h2>
			</div>
			<div>
				<Input placeholder="Search" className="shadow-sm" />
			</div>
			{/* table */}
			<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="hidden w-[100px] sm:table-cell">
								<span className="sr-only">Image</span>
							</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Price</TableHead>
							<TableHead className="hidden md:table-cell">
								Total Sales
							</TableHead>
							<TableHead className="hidden md:table-cell">Created at</TableHead>
							<TableHead>
								<span className="sr-only">Actions</span>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="hidden sm:table-cell">
								<Image
									alt="Product image"
									className="aspect-square rounded-md object-cover"
									height="64"
									src="/placeholder.svg"
									width="64"
								/>
							</TableCell>
							<TableCell className="font-medium">
								Laser Lemonade Machine
							</TableCell>
							<TableCell>
								<Badge variant="outline">Draft</Badge>
							</TableCell>
							<TableCell>$499.99</TableCell>
							<TableCell className="hidden md:table-cell">25</TableCell>
							<TableCell className="hidden md:table-cell">
								2023-07-12 10:42 AM
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button aria-haspopup="true" size="icon" variant="ghost">
											<MoreHorizontal className="h-4 w-4" />
											<span className="sr-only">Toggle menu</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="hidden sm:table-cell">
								<Image
									alt="Product image"
									className="aspect-square rounded-md object-cover"
									height="64"
									src="/placeholder.svg"
									width="64"
								/>
							</TableCell>
							<TableCell className="font-medium">
								Hypernova Headphones
							</TableCell>
							<TableCell>
								<Badge variant="outline">Active</Badge>
							</TableCell>
							<TableCell>$129.99</TableCell>
							<TableCell className="hidden md:table-cell">100</TableCell>
							<TableCell className="hidden md:table-cell">
								2023-10-18 03:21 PM
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button aria-haspopup="true" size="icon" variant="ghost">
											<MoreHorizontal className="h-4 w-4" />
											<span className="sr-only">Toggle menu</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="hidden sm:table-cell">
								<Image
									alt="Product image"
									className="aspect-square rounded-md object-cover"
									height="64"
									src="/placeholder.svg"
									width="64"
								/>
							</TableCell>
							<TableCell className="font-medium">AeroGlow Desk Lamp</TableCell>
							<TableCell>
								<Badge variant="outline">Active</Badge>
							</TableCell>
							<TableCell>$39.99</TableCell>
							<TableCell className="hidden md:table-cell">50</TableCell>
							<TableCell className="hidden md:table-cell">
								2023-11-29 08:15 AM
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button aria-haspopup="true" size="icon" variant="ghost">
											<MoreHorizontal className="h-4 w-4" />
											<span className="sr-only">Toggle menu</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="hidden sm:table-cell">
								<Image
									alt="Product image"
									className="aspect-square rounded-md object-cover"
									height="64"
									src="/placeholder.svg"
									width="64"
								/>
							</TableCell>
							<TableCell className="font-medium">
								TechTonic Energy Drink
							</TableCell>
							<TableCell>
								<Badge variant="secondary">Draft</Badge>
							</TableCell>
							<TableCell>$2.99</TableCell>
							<TableCell className="hidden md:table-cell">0</TableCell>
							<TableCell className="hidden md:table-cell">
								2023-12-25 11:59 PM
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button aria-haspopup="true" size="icon" variant="ghost">
											<MoreHorizontal className="h-4 w-4" />
											<span className="sr-only">Toggle menu</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="hidden sm:table-cell">
								<Image
									alt="Product image"
									className="aspect-square rounded-md object-cover"
									height="64"
									src="/placeholder.svg"
									width="64"
								/>
							</TableCell>
							<TableCell className="font-medium">
								Gamer Gear Pro Controller
							</TableCell>
							<TableCell>
								<Badge variant="outline">Active</Badge>
							</TableCell>
							<TableCell>$59.99</TableCell>
							<TableCell className="hidden md:table-cell">75</TableCell>
							<TableCell className="hidden md:table-cell">
								2024-01-01 12:00 AM
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button aria-haspopup="true" size="icon" variant="ghost">
											<MoreHorizontal className="h-4 w-4" />
											<span className="sr-only">Toggle menu</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="hidden sm:table-cell">
								<Image
									alt="Product image"
									className="aspect-square rounded-md object-cover"
									height="64"
									src="/placeholder.svg"
									width="64"
								/>
							</TableCell>
							<TableCell className="font-medium">Luminous VR Headset</TableCell>
							<TableCell>
								<Badge variant="outline">Active</Badge>
							</TableCell>
							<TableCell>$199.99</TableCell>
							<TableCell className="hidden md:table-cell">30</TableCell>
							<TableCell className="hidden md:table-cell">
								2024-02-14 02:14 PM
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button aria-haspopup="true" size="icon" variant="ghost">
											<MoreHorizontal className="h-4 w-4" />
											<span className="sr-only">Toggle menu</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
