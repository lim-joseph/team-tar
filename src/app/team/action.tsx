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
  const code = createHash("sha256")
    .update(
      teamData.teamName +
        teamData.postcode +
        teamData.sport +
        Date.now().toString()
    )
    .digest("base64")
    .substring(0, 8);
  const {data, error} = await supabase
    .from("Team")
    .insert([
      {
        name: teamData.teamName,
        postcode: teamData.postcode,
        sport: teamData.sport,
        description: teamData.teamDescription,
        id: code,
      },
    ])
    .select("id");
  if (data && !error) {
    console.log(data);
    if (!error) {
      console.log(code);
      redirect("/team/" + code);
    }
  }

  return {data};
}

export async function getTeam(code: string) {
  const supabase = createClient();
  const {data, error} = await supabase
    .from("Team")
    .select(
      `id,name, postcode, sport, User(*), description,  Member(*, User(*))`
    )
    .eq("id", code);
  if (error) {
    return {error: error.message};
  }
  if (data.length < 1) {
    return {error: "Team not found"};
  }

  const team = {
    teamName: data[0].name,
    postcode: data[0].postcode,
    sport: data[0].sport,
    teamDescription: data[0].description,
    moderator: data[0].User,
    members: data[0].Member,
  };
  return team;
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

export async function pendingMembers(
  teamId: string,
  user_id: string,
  is_member: boolean
) {
  const supabase = createClient();
  const {data, error} = await supabase
    .from("Member")
    .update({is_member: is_member})
    .eq("team_id", teamId)
    .eq("user_id", user_id);

  if (error) {
    return {error: error.message};
  }
  return {data};
}
export async function acceptTeam(memberId: number) {
  const supabase = createClient();
  const {data, error} = await supabase
    .from("Member")
    .update({is_member: true})
    .eq("id", memberId);
  if (error) {
    return {error: error.message};
  }
  return {data};
}

export async function joinTeam(form: FormData) {
  const code = form.get("teamCode") as string;
  console.log(code);
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const userId = user.data.user?.id;
  console.log(userId);
  const {data: teamData, error: teamError} = await supabase
    .from("Member")
    .select("*")
    .eq("team_id", code)
    .eq("user_id", userId);
  if (!teamData || teamData.length < 0) {
    const {data, error} = await supabase.from("Member").insert({
      team_id: code,
      user_id: userId,
    });

    console.log(error);
    if (error) {
      return {error: error.message};
    }
    return {data};
  }
}
