import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import vercel from "@astrojs/vercel/serverless";
import rehypePrettyCode from "rehype-pretty-code";

const options = {};

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    markdoc(),
    ...(process.env.PRODUCTION ? [] : [keystatic()]),
  ],
  output: "hybrid",
  adapter: vercel(),
  markdown: {
    syntaxHighlight: false, // Disable syntax built-in syntax hightlighting from astro
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
