import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 h-12 border-b border-slate-100 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={155} height={30} alt="logo" />
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
                  await signOut();
                }}
              >
                <button type="submit">
                  <span>Logout</span>
                </button>
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
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};
