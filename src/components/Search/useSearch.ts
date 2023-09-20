import {
  create,
  insertMultiple,
  search,
  type Orama,
  type ProvidedTypes,
} from "@orama/orama";
import { useEffect, useState } from "react";

export const useSearch = () => {
  const [db, setDb] = useState<Orama<ProvidedTypes> | undefined>();

  const getRecipes = async () => {
    const recipes = await fetch("/search-index");
    const json = await recipes.json();
    return json?.recipes ?? [];
  };

  const searchTerm = async (term: string) => {
    if (db) {
      const results = await search(db, {
        term,
        properties: "*",
        tolerance: 5,
      });
      return results.hits;
    }
    return Promise.resolve(undefined);
  };

  useEffect(() => {
    const intitDb = async () => {
      const recipes = await getRecipes();
      const recipeDb = await create({
        schema: {
          title: "string",
          categories: "string[]",
          tags: "string[]",
          cookingTime: "number",
          ingredients: "string[]",
          url: "string",
        },
      });

      await insertMultiple(recipeDb, recipes);
      setDb(recipeDb);
    };

    intitDb();
  }, []);

  return { search: searchTerm };
};
