import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
      .optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    cookingTime: z.number(),
    ingredients: z.array(z.string()),
    credit: z.string().optional(),
  }),
});

export const collections = { recipes };
