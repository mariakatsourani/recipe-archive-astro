import {
  create,
  insertMultiple,
  type Document,
  type Orama,
  type ProvidedTypes,
} from "@orama/orama";
import { useEffect, useState } from "react";

export const useOrama = () => {
  const [db, setDb] = useState<Orama<ProvidedTypes> | undefined>();

  const getRecipes = async () => {
    const recipes = await fetch("/search-index");
    const json = await recipes.json();
    console.log("recipes", json);
    return json.recipes as Document[];
  };

  useEffect(() => {
    const intitDb = async () => {
      const recipes = await getRecipes();
      const recipeDb = await create({
        schema: {
          title: "string",
          tags: "string[]",
          ingredients: "string[]",
          url: "string",
        },
      });

      await insertMultiple(recipeDb, recipes);
      setDb(recipeDb);
    };

    intitDb();
  }, []);

  return { db };
};
