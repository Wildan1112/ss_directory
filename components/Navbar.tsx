import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-4 border-b border-slate-100 bg-transparent backdrop-blur-sm shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={155} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-slate-700">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <Button type="submit">Logout</Button>
              </form>

              <Link href={`user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <Button variant={"outline"} type="submit">
                <Image
                  src="/google.svg"
                  alt="google icon"
                  width={24}
                  height={24}
                />
                Login with Google
              </Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};
