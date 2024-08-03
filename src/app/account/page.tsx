import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default async function AccountPage() {
  const supabase = createClient();
  const {data, error} = await supabase.auth.getUser();
  if (error) {
    redirect("/login");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-[800px] bg-white shadow-md">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>
            <div className="border-t border-gray-300 my-4" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" required className="w-full"></Input>
              </div>
              <div className="grid gap-2 mt-4">
                <Label htmlFor="Email">Email</Label>
                <Input id="Email" required className="w-full" />
              </div>
              <div className="grid gap-2 mt-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  required
                  className="w-full"
                  type="password"
                />
              </div>
              <div className="grid gap-2 mt-4">
                <Label htmlFor="Interest">Interest</Label>
                <Select name="sport">
                  <SelectTrigger>
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
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
