import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mope-blog.com/",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    contentCollectionCache: true
  },
  image: {
    remotePatterns: [{
      protocol: "https",
      hostname: "*.unsplash.com"
    }]
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime]
  },
  integrations: [mdx(), sitemap(), pagefind(), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"],
      debug: false
    }
  }), svelte()]
});
