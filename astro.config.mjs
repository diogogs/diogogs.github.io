import { defineConfig } from "astro/config";

// GitHub Pages user site — served at the root of diogogs.github.io.
// When a custom domain is added later, update `site` and add a CNAME file in public/.
export default defineConfig({
  site: "https://diogogs.github.io",
});
