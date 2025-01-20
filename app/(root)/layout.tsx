import { Navbar } from "@/components/Navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex flex-col font-work-sans">
      <Navbar />
      {children}
    </main>
  );
};
export default Layout;
