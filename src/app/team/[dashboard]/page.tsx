import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function test({params}: {params: {dashboard: string}}) {
  const {dashboard} = params;
  console.log("Server-side code in getServerSideProps:", dashboard);

  // Pass data to the
  return <div className="flex grid flex-wrap mx-auto grid-cols-2 gap-8">
    {/* Left Section*/}
    <Card className="w-[600px] h-[800px]">
      <CardHeader >
        <CardTitle>Active Sport Competition</CardTitle>
        <CardDescription>List of Ongoing Competition for the team
        <div className="border-t border-gray-300 my-4"/>
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
    
    <div className="flex flex-col">
       {/* Button Right Section */}
       <div className="mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Click Me
          </button>
        </div>

    <div className="grid grid-rows-2 gap-4">
      {/* Top Right Section*/}
      <Card className="h-[300px]">
        <CardHeader>
          <CardTitle>Team Member</CardTitle>
          <CardDescription>List of members in the team
          <div className="border-t border-gray-300 my-4"/>
          </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="mt-4">Caleb</div>
        <div className="mt-4">Kenneth</div>
        <div className="mt-4">Joesph</div>
        </CardContent>
      </Card>


      {/* Buttom Right Card*/}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
    </div>
  </div>
}
