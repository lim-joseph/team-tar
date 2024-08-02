export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
				<p>dashboard layout</p>
			</div>
		</main>
	);
}
