import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const get: APIRoute = async function get() {
  const recipes = await getCollection("recipes");

  const body = JSON.stringify({
    recipes: recipes.map((recipe) => {
      return {
        title: recipe.data.title,
        tags: [
          ...recipe.data.categories,
          ...recipe.data.tags,
          recipe.data.cookingTime.toString(),
        ],
        ingredients: recipe.data.ingredients,
        url: `/${recipe.slug}`,
      };
    }),
  });

  return { body };
};
