import Card from "@/components/StartupCard";
import { SearchForm } from "@/components/SearchForm";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 89,
      author: {
        _id: 1,
        name: "Wildan Azam",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque quae illo quod autem alias dicta nostrum non ratione, rem optio excepturi iure! Reiciendis, beatae?",
      image: "https://picsum.photos/200/300",
      category: "IOT",
      title: "New gen IOT",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your idea, <br /> Lets grow together
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit your ideas, bring it to life.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Ideas"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: any, index: number) => (
              <Card key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No ideas found</p>
          )}
        </ul>
      </section>
    </>
  );
}
