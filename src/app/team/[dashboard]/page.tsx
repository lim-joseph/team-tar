"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {redirect} from "next/navigation";
import {useEffect, useState} from "react";
import {getTeam} from "../action";
import PendingMembersCard from "./PendingMembers";
export default function Dashboard({params}: {params: {dashboard: string}}) {
  const {dashboard} = params;
  const [team, setTeam] = useState({
    teamName: "",
    moderator: {username: ""},
    members: [{username: "", is_member: ""}],
    teamDescription: "",
    postcode: "",
  });
  const [approvedMembers, setApprovedMembers] = useState([]);
  const [pendingMembers, setPendingMembers] = useState([]);

  useEffect(() => {
    async function fetchTeam() {
      const team = await getTeam(dashboard);
      if (team.error) {
        console.log(team.error);
        redirect("/404");
      }
      console.log(team);
      setTeam(team);
      setApprovedMembers(team.members.filter((member) => member.is_member));
      setPendingMembers(team.members.filter((member) => !member.is_member));
    }
    fetchTeam();
  }, [dashboard]);

  const [inviteCode, setInviteCode] = useState("");
  const [isInviteCodeVisible, setIsInviteCodeVisible] = useState(false);
  const handleInviteClick = () => {
    // Generate an invite code (for simplicity, using a static code here)
    const code = dashboard;
    setInviteCode(code);
    setIsInviteCodeVisible(true);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inviteCode);
    alert("Invite code copied to clipboard!");
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-28">{team.teamName}</h1>
      <div className="flex flex-wrap mx-auto grid grid-cols-1 sm:grid-cols-2 gap-32">
        {/* Left Section */}
        <Card className="max-w-full sm:w-[600px] h-full sm:h-[820px] bg-neutral-100 overflow-y-auto">
          <CardHeader>
            <CardTitle>Active Sport Competition</CardTitle>
            <CardDescription>
              <div className="mt-2">
                List of Ongoing Competition for the team
              </div>
              <div className="border-t border-gray-300 my-4" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-accent">
                  <TableHead>Match Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div>gudasfasdfasd</div>
                  </TableCell>
                  <TableCell>
                    <div>gu</div>
                  </TableCell>
                  <TableCell>
                    <div>gu</div>
                  </TableCell>
                  <TableCell>
                    <div>gu</div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex flex-col">
          <div className="grid grid-rows-2 gap-4">
            {/* Top Right Section */}
            <Card className="sm:h-[400px] overflow-y-auto bg-neutral-100">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Team Member</CardTitle>
                  {!isInviteCodeVisible ? (
                    <Button
                      className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
                      onClick={handleInviteClick}
                    >
                      Invite Member
                    </Button>
                  ) : (
                    <Button
                      className="bg-green-500 text-white px-4 py-2 rounded ml-4"
                      onClick={handleCopyClick}
                    >
                      {inviteCode}
                    </Button>
                  )}
                </div>
                <CardDescription>
                  List of members in the team
                  <div className="border-t border-gray-300 my-4" />
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center mt-4">
                  <Avatar>
                    <AvatarImage src="https://via.placeholder.com/40" />
                    <AvatarFallback>CA</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">{team.moderator.username}</div>
                </div>
                {approvedMembers &&
                  approvedMembers.map(({User}) => (
                    <div className="flex items-center mt-4">
                      <Avatar>
                        <AvatarImage src="https://via.placeholder.com/40" />
                        <AvatarFallback>CA</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">{User.username}</div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            {/* Bottom Right Card */}
            <Card className="sm:h-[400px] bg-neutral-100 overflow-y-auto">
              <CardHeader>
                <CardTitle>Match History</CardTitle>
                <CardDescription>
                  <div className="mt-2">History of all the previous match</div>
                  <div className="border-t border-gray-300 my-4" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-accent">
                      <TableHead>Match Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Result</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>gudasfasdfasd</div>
                      </TableCell>
                      <TableCell>
                        <div>gu</div>
                      </TableCell>
                      <TableCell>
                        <div>gu</div>
                      </TableCell>
                      <TableCell>
                        <div>gu</div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <PendingMembersCard teamId={dashboard} members={pendingMembers} />
          </div>
        </div>
      </div>
    </div>
  );
}
