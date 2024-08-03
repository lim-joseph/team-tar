import React, {useState, useEffect} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

export default function PendingMembersCard({
  teamId,
  members,
}: {
  teamId: string;
  members: any[];
}) {
  const [pendingMembers, setPendingMembers] = useState(
    members.filter((member) => member.is_member === false)
  );

  useEffect(() => {
    // Fetch the pending members when the component mounts
    async function fetchPendingMembers() {
      const members = await getPendingMembers(teamId); // Replace with your actual API call
      setPendingMembers(members);
    }

    fetchPendingMembers();
  }, [teamId]);

  return (
    <Card className="sm:h-[400px] bg-neutral-100 overflow-y-auto">
      <CardHeader>
        <CardTitle>Pending</CardTitle>
        <CardDescription>
          <div className="mt-2">Members that need to be accepted</div>
          <div className="border-t border-gray-300 my-4" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        {pendingMembers.length > 0 ? (
          pendingMembers.map((member) => (
            <div key={member.id} className="flex items-center mt-4">
              <Avatar>
                <AvatarImage
                  src={member.avatarUrl || "https://via.placeholder.com/40"}
                />
                <AvatarFallback>{member.username.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4">{member.username}</div>
              <Button className="ml-auto bg-green-500 text-white px-4 py-2 rounded">
                Accept
              </Button>
              <Button className="ml-auto bg-green-500 text-white px-4 py-2 rounded">
                Decline
              </Button>
            </div>
          ))
        ) : (
          <div>No pending members.</div>
        )}
      </CardContent>
    </Card>
  );
}
