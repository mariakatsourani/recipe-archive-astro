import { useOrama } from "./useOrama";
import { search } from "@orama/orama";
import { useState } from "react";

export const Search = () => {
  const [input, setInput] = useState("");
  const { db } = useOrama();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (db) {
      const searchResult = await search(db, {
        term: input,
        properties: "*",
        tolerance: 5,
      });
      console.log("searchResult", searchResult.hits);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search...!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="text-gray-light" type="submit">
        Search
      </button>
    </form>
  );
};
