import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://mariakatsourani.github.io",
  integrations: [mdx(), tailwind(), react()],
  base: "/recipe-archive-astro",
  trailingSlash: "always"
});