"use server";
import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

interface SignupFormData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
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

  const {data: authData, error} = await supabase.auth.signUp(data);
  if (error) {
    console.error(error);
    return {error: error.message};
  }
  const {error: insertError} = await supabase.from("User").insert([
    {
      username: formData.username,
      first_name: formData.firstName,
      last_name: formData.lastName,
    },
  ]);
  if (insertError) {
    console.error(insertError);
    return {error: insertError.message};
  }
  revalidatePath("/", "layout");
  redirect("/account");
}
