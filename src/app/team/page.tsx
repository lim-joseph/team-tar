"use client";
import {Card} from "@/components/ui/card";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {createClient} from "@/lib/supabase/client";
import {redirect, useRouter} from "next/navigation";
import CreateTeamModal from "./CreateTeamModal";
import {useEffect, useState} from "react";
import {getTeams, getModeratingTeams} from "./action";

const sportEmoji = {
  basketball: "🏀",
  soccer: "⚽️",
  football: "🏈",
  baseball: "⚾️",
  hockey: "🏒",
  badminton: "🏸",
  swimming: "🏊",
};

export default function Page() {
  const supabase = createClient();
  const [teams, setTeams] = useState([]);
  const [moderatingTeams, setModeratingTeams] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function getProfile() {
      const {data: loginData, error: loginError} =
        await supabase.auth.getUser();
      if (loginError) {
        redirect("/login");
      }
      const userTeams = await getTeams();
      console.log(userTeams);
      setTeams(userTeams);
      const moderatingTeams = await getModeratingTeams();
      setModeratingTeams(moderatingTeams);
      console.log(moderatingTeams);
    }
    getProfile();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Teams</h1>
      <div className="flex justify-center mb-6">
        <CreateTeamModal />
      </div>
      {moderatingTeams.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Moderating Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {moderatingTeams.map((team) => (
              <Card
                key={team.id}
                className="cursor-pointer hover:bg-gray-100 transition-colors shadow-md"
              >
                <div
                  className="flex items-center p-4 gap-4"
                  onClick={() => router.push(`/team/${team.id}`)}
                >
                  <Avatar className="bg-gray-200 text-2xl">
                    <AvatarFallback>
                      {sportEmoji[team.sport.toLowerCase()]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{team.name}</h3>
                    <p className="text-gray-600">{team.sport}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <Card
              key={team.id}
              className="cursor-pointer hover:bg-gray-100 transition-colors shadow-md"
            >
              <div
                className="flex items-center p-4 gap-4"
                onClick={() => router.push(`/team/${team.id}`)}
              >
                <Avatar className="bg-gray-200 text-2xl">
                  <AvatarFallback>
                    {sportEmoji[team.sport.toLowerCase()]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{team.name}</h3>
                  <p className="text-gray-600">{team.sport}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
