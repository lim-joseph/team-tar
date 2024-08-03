import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
export default async function AccountPage() {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error) {
		redirect("/login");
	}
	if (!data) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h1>Welcome back, {data.user?.user_metadata.username}</h1>
			{/* <button onClick={logout}>Logout</button> */}
		</div>
	);
}
