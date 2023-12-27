import { defineConfig } from "astro/config";
import stylex from "astro-stylex";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    markdoc(),
    stylex(),
    ...(process.env.PRODUCTION ? [] : [keystatic()]),
  ],
  output: "hybrid",
});
