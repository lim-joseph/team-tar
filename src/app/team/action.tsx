"use server";
import {revalidatePath} from "next/cache";
import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";
import {createHash} from "crypto";

interface TeamForm {
  teamName: string;
  postcode: number;
  sport: string;
  teamDescription: string;
}

export async function registerTeam(formData: FormData) {
  const teamData: TeamForm = {
    teamName: formData.get("teamName") as string,
    postcode: parseInt(formData.get("postcode") as string),
    sport: formData.get("sport") as string,
    teamDescription: formData.get("teamDescription") as string,
  };
  console.log(teamData);
  const supabase = createClient();

  const {data, error} = await supabase
    .from("Team")
    .insert([
      {
        name: teamData.teamName,
        postcode: teamData.postcode,
        sport: teamData.sport,
        description: teamData.teamDescription,
      },
    ])
    .select("id");
  if (data && !error) {
    const code = createHash("sha256")
      .update(data[0].id.toString())
      .digest("base64")
      .substring(0, 8);
    console.log(code);
    if (!error) {
      redirect("/team/" + code);
    }
  }

  return {data};
}

export async function getModeratingTeams() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const userId = user.data.user?.id;

  if (userId) {
    const {data, error} = await supabase
      .from("Team")
      .select("*")
      .eq("moderator", userId);

    if (error) {
      return {error: error.message};
    }
    console.log(data);
    return {data};
  }
}

export async function editTeam(teamData: TeamForm, teamId: string) {
  const supabase = createClient();
  const {data, error} = await supabase
    .from("Team")
    .update({
      name: teamData.teamName,
      postcode: teamData.postcode,
      sport: teamData.sport,
      description: teamData.teamDescription,
    })
    .eq("id", teamId);
  if (error) {
    return {error: error.message};
  }
  return {data};
}
