"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getProfile() {
    const supabase = createClient();
    const { data: loginData, error: loginError } = await supabase.auth.getUser();
    if (loginError) {
        revalidatePath("/", "layout");
        redirect("/login");
    }

    const { data, error } = await supabase.from("User").select("*").eq("id", loginData.user.id).single();
    if (error) {
        console.error(error);
        return { error: error.message };
    }
    return data;
}