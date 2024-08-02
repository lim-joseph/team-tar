import {createClient} from "@/lib/supabase/server";
export default async function AccountPage() {
  const supabase = createClient();
  const {data, error} = await supabase.auth.getUser();
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Welcome back, {data.user?.user_metadata.username}</h1>
      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
}
