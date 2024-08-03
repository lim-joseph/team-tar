import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {registerTeam} from "./action";
import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";

export default async function Page() {
  const supabase = createClient();

  const {data, error} = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div>
      {/* header */}
      <div className="bg-slate-600 text-white p-12 text-5xl">
        Create Your New Team
      </div>

      <div className="text-slate-400 mt-4 ml-12">
        Fill the form to create your team
      </div>
      <form action={registerTeam}>
        {/* input box for the team name */}
        <div className="mt-12 ml-12 text-xl">
          Team Name
          <Input
            id="teamName"
            type="text"
            placeholder="Enter Your Team Name"
            className="mt-4 w-3/5 max-w-screen-xl	"
            required
            name="teamName"
          ></Input>
        </div>

        {/* input box for the team description */}
        <div className="mt-12 ml-12 text-xl">
          Team Description
          <Input
            id="teamDescription"
            type="text"
            placeholder="Enter Your Description"
            className="mt-4 w-3/5 max-w-screen-xl"
            name="teamDescription"
          ></Input>
        </div>

        {/* selection box for the team sport type */}
        <div className="mt-12 ml-12 text-xl">
          Sport Selection
          <Select name="sport">
            <SelectTrigger className="mt-4 w-3/5 max-w-screen-xl">
              <SelectValue placeholder="Select sport" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sports</SelectLabel>
                <SelectItem value="Basketball">Basketball</SelectItem>
                <SelectItem value="Soccer">Soccer</SelectItem>
                <SelectItem value="Badminton">Badminton</SelectItem>
                <SelectItem value="Volleyball">Volleyball</SelectItem>
                <SelectItem value="Swimming">Swimming</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* input box for the location postcode */}
        <div className="mt-12 ml-12 text-xl">
          Postcode
          <Input
            id="postcode"
            type="number"
            placeholder="Enter Your Postcode"
            min="0200"
            className="mt-4 w-3/5 max-w-screen-xl"
            name="postcode"
          ></Input>
        </div>

        <div className="mt-12 ml-12">
          <Button type="submit" className="bg-lime-600">
            Create Team
          </Button>
        </div>
      </form>
    </div>
  );
}
