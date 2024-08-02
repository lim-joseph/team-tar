"use server";
import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

interface SignupFormData {
  email: string;
  password: string;
  username: string;
}
export async function signup(formData: SignupFormData) {
  const supabase = createClient();
  console.log(formData);
  const data = {
    email: formData.email,
    password: formData.password,

    options: {
      emailRedirectTo: "https://example.com/welcome",
      data: {username: formData.username},
    },
  };
  console.log(data);

  const {error} = await supabase.auth.signUp(data);

  if (error) {
    return {error: error.message};
  }

  revalidatePath("/", "layout");
  redirect("/account");
}
