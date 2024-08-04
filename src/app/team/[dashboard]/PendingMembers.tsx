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
import {acceptTeam, removeMember} from "../action";

export default function PendingMembersCard({
  teamId,
  members,
}: {
  teamId: string;
  members: any[];
}) {
  console.log(members);
  return (
    <Card className="sm:h-[400px] bg-neutral-100 overflow-y-auto">
      <CardHeader>
        <CardTitle>Pending</CardTitle>
        <CardDescription>
          <div className="mt-2">Players waiting to be accepted</div>
          <div className="border-t border-gray-300 my-4" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        {members.length > 0 ? (
          members.map((member) => (
            <div key={member.id} className="flex items-center mt-4">
              <Avatar>
                <AvatarImage
                  src={member.avatarUrl || "https://via.placeholder.com/40"}
                />
                <AvatarFallback>
                  {member.User.username.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4">{member.User.username}</div>
              <Button
                className="ml-auto bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => acceptTeam(member.id)}
              >
                Accept
              </Button>
              <Button
                className="ml-auto bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => removeMember(member.id)}
              >
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
