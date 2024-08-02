import { Input } from "@/components/ui/input"

export default function Page() {
  return <div>
    <div className="bg-slate-600 text-white p-12 text-5xl">
      Create Your New Team
    </div>

    <div className="text-slate-400 mt-4 ml-12">
      Fill the form to create your team
    </div>
    
    <div className="mt-8 ml-12 text-xl">
      Team Name
      <Input type="string" placeholder="Enter Your Team Name" className="mt-4"></Input>
    </div>
  </div>;
}
