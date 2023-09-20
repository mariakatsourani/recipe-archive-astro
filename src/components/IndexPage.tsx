import { RecipeList } from "./RecipeList";
import { SearchForm } from "./Search/SearchForm";
import { useState } from "react";
import type { Result } from "@orama/orama";
import type { Post } from "../types/Post";

const resultsToPosts = (results: Result[]) => {
  return results.reduce((acc, cur) => {
    return {
      ...({
        slug: (cur.document?.slug as string) ?? "",
        data: {
          title: "",
          cookingTime: 1,
          categories: "",
          tags: "",
        },
      } as unknown as Post),
    };
  }, [] as Post[]);
};

export const IndexPage = ({ posts }: { posts: Post[] }) => {
  const [searchResults, setSearchResults] = useState<Result[] | undefined>();
  console.log("searchResults", searchResults);
  return (
    <>
      <div className="flex justify-center p-2 mb-3">
        <SearchForm setSearchResults={setSearchResults} />
      </div>

      {!searchResults?.length && <p>No results found.</p>}
      <RecipeList
        posts={searchResults?.length ? resultsToPosts(searchResults) : posts}
      />
    </>
  );
};
