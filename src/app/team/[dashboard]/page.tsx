import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default async function test({params}: {params: {dashboard: string}}) {
  const {dashboard} = params;
  console.log("Server-side code in getServerSideProps:", dashboard);

  // Pass data to the
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-28">Team 1</h1>
      <div className="flex flex-wrap mx-auto grid grid-cols-1 sm:grid-cols-2 gap-32">
        {/* Left Section */}
        <Card className="max-w-full sm:w-[600px] h-full sm:h-[820px] bg-neutral-100 overflow-y-auto">
          <CardHeader>
            <CardTitle>Active Sport Competition</CardTitle>
            <CardDescription >
              <div className="mt-2">List of Ongoing Competition for the team</div>
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
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                    Invite Member
                  </Button>
                </div>
                <CardDescription>
                  List of members in the team
                  <div className="border-t border-gray-300 my-4"/>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mt-4">
                    <Avatar>
                      <AvatarImage src="https://via.placeholder.com/40" alt="Caleb" />
                      <AvatarFallback>CA</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">Caleb</div>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar>
                      <AvatarImage src="https://via.placeholder.com/40" alt="Kenneth" />
                      <AvatarFallback>KE</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">Kenneth</div>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar>
                      <AvatarImage src="https://via.placeholder.com/40" alt="Joesph" />
                      <AvatarFallback>JO</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">Joesph</div>
                  </div>
              </CardContent>
            </Card>
  
            {/* Bottom Right Card */}
            <Card className="sm:h-[400px] bg-neutral-100 overflow-y-auto">
              <CardHeader>
                <CardTitle>Match History</CardTitle>
                <CardDescription>
                <div className="mt-2">History of all the previous match</div>
                  <div className="border-t border-gray-300 my-4"/>
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
          </div>
        </div>
      </div>
    </div>
  );
}
