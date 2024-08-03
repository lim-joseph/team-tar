"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface SignupFormData {
	email: string;
	password: string;
	username: string;
	firstName: string;
	lastName: string;
}
export async function signup(formData: SignupFormData) {
	const supabase = createClient();
	const data = {
		email: formData.email,
		password: formData.password,

		options: {
			emailRedirectTo: "https://example.com/welcome",
			data: { username: formData.username },
		},
	};

	const { data: authData, error } = await supabase.auth.signUp(data);
	if (error) {
		console.error(error);
		return { error: error.message };
	}

	revalidatePath("/", "layout");
	redirect("/signup/" + formData.username);
}

interface ProfileFormData {
	username: string;
	firstName: string;
	lastName: string;
	birthday: string;
	city: string;
	interest: any;
}
export async function addUserProfile(formData: ProfileFormData) {
	const supabase = createClient();
	const { error: insertError } = await supabase.from("User").insert([
		{
			username: formData.username,
			first_name: formData.firstName,
			last_name: formData.lastName,
			birthday: formData.birthday,
			city: formData.city,
			interest: formData.interest,
		},
	]);
	if (insertError) {
		console.error(insertError);
		return { error: insertError.message };
	}
	revalidatePath("/", "layout");
	redirect("/");
}
