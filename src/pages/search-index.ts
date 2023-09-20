import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { SITE_BASE } from "../consts";

export const get: APIRoute = async function get() {
  const recipes = await getCollection("recipes");

  const body = JSON.stringify({
    recipes: recipes.map((recipe) => {
      return {
        title: recipe.data.title,
        categories: recipe.data.categories,
        tags: recipe.data.tags,
        cookingTime: recipe.data.cookingTime,
        ingredients: recipe.data.ingredients,
        url: `${SITE_BASE}/${recipe.slug}`,
      };
    }),
  });

  return { body };
};
