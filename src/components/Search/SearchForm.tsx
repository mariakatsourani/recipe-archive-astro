import { useSearch } from "./useSearch";
import { useState, Dispatch, SetStateAction } from "react";
import type { Result } from "@orama/orama";

export const SearchForm = ({
  setSearchResults,
}: {
  setSearchResults: Dispatch<SetStateAction<Result[] | undefined>>;
}) => {
  const [input, setInput] = useState("");
  const { search } = useSearch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = await search(input);
    setSearchResults(results);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center align-middle">
      <input
        className="mr-1 p-1 rounded-md"
        type="text"
        placeholder="search...!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          height: "40px",
        }}
      />
      <button
        className="p-1 rounded-md bg-purple"
        type="submit"
        style={{
          height: "40px",
        }}
      >
        search
      </button>
    </form>
  );
};
