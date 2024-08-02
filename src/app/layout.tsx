import {Button} from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import {Inter as FontSans} from "next/font/google";
import Link from "next/link";
import "./globals.css";
import {CircleUser} from "lucide-react";
import {logout} from "./logout/action";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased p-8 flex",
          fontSans.variable
        )}
      >
        <ResizablePanelGroup direction="horizontal" className="min-h-screen">
          <ResizablePanel defaultSize={18}>
            <aside className="flex flex-col gap-4">
              <Button variant="link" className="justify-start">
                teamStar
              </Button>
              <Separator />
              <Button variant="link" className="justify-start">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="link" className="justify-start">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="link" className="justify-start">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <form action={logout} method="post">
                      <button type="submit">Logout</button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </aside>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="border rounded-md border-l-0">
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </body>
    </html>
  );
}
