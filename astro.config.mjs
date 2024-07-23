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
    defaultStrategy: "viewport",
  },
  experimental: {
    contentCollectionCache: true,
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();

        const { pathname } = new URL(item.url);

        // Top
        if (pathname === "/") {
          item.priority = 1.0;
          item.changefreq = "daily";
          return item;
        }

        // Tags
        if (pathname === "/tags/") {
          item.priority = 0.5;
          item.changefreq = "monthly"
          return item;
        }

        // Page
        if (/^\/page\/[\d]+\/$/.test(pathname)) {
          item.priority = 0.6;
          item.changefreq = "weekly";
          return item;
        }

        // Article
        if (/^\/posts\/[\w-]+\/$/.test(pathname)) {
          item.priority = 0.8;
          item.changefreq = "weekly";
          return item;
        }

        // Tag
        if (/^\/tags\/[\w%]+\/[\d]+\/$/.test(pathname)) {
          item.priority = 0.5;
          item.changefreq = "monthly";
          return item;
        }

        // Category
        if (/^\/category\/[\w%]+\/[\d]+\/$/.test(pathname)) {
          item.priority = 0.5;
          item.changefreq = "monthly";
          return item;
        }

        return item;
      }
    }),
    pagefind(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),
    svelte(),
  ],
});
