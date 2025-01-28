import Form from "next/form";
import { SearchFormReset } from "./SearchFormReset";
export const SearchForm = () => {
  const query = "Test";

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search idea..."
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button className="search-btn text-white">S</button>
      </div>
    </Form>
  );
};
