import { SearchForm } from "@/components/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your idea, <br /> Lets grow together
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit your ideas, we will bring it to life.
        </p>

        <SearchForm />
      </section>
    </>
  );
}
