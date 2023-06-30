import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "mariakatsourani.github.io",
  base: "/recipe-archive-astro",
  integrations: [mdx(), tailwind()],
});
