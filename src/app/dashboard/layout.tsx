export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div>
				<p>dashboard layout</p>
				{children}
			</div>
		</main>
	);
}
