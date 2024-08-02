import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";
import {createHash} from "crypto";

interface TeamForm {
  teamName: string;
  postcode: number;
  sport: string;
  teamDescription: string;
}

export async function registerTeam(teamData: TeamForm) {
  const supabase = createClient();
  const user = await supabase.auth.getSession();
  if (!user.data) {
    redirect("/login");
  }
  const inviteCode = createHash("sha256").update(
    teamData.teamName + Date.now().toString()
  );
  const {data, error} = await supabase.from("Team").insert([
    {
      name: teamData.teamName,
      postcode: teamData.postcode,
      sport: teamData.sport,
      description: teamData.teamDescription,
      invite_code: inviteCode,
    },
  ]);
  console.log(data);
  console.log(error);
  if (error) {
    return {error: error.message};
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
