import { addIconSelectors } from "@iconify/tailwind";
import prime from "@iconify-json/prime/icons.json";
import jam from "@iconify-json/jam/icons.json";
import ion from "@iconify-json/ion/icons.json";
import iconParkSolid from "@iconify-json/icon-park-solid/icons.json";
import tabler from "@iconify-json/tabler/icons.json";
import ph from "@iconify-json/ph/icons.json";
import materialSymbols from "@iconify-json/material-symbols/icons.json";
import mdi from "@iconify-json/mdi/icons.json";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Helvetica Neue",
        "Arial",
        "Hiragino Kaku Gothic ProN",
        "Hiragino Sans",
        "Meiryo",
        "sans-serif",
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-to-t":
          "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
        transparent:
          "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/typography"),
    addIconSelectors([
      {
        source: prime,
        icons: ["twitter"],
      },
      {
        source: jam,
        icons: ["line"],
      },
      {
        source: ion,
        icons: ["share"],
      },
      {
        source: iconParkSolid,
        icons: ["up-c", "right-c"],
      },
      {
        source: tabler,
        icons: [
          "search",
          "sun-filled",
          "moon-filled",
          "menu-2",
          "menu-order",
          "rss",
          "chevron-left",
          "chevron-right",
          "ad",
        ],
      },
      {
        source: ph,
        icons: ["link"],
      },
      {
        source: materialSymbols,
        icons: ["info", "warning", "error", "update"],
      },
      {
        source: mdi,
        icons: ["table-of-contents"]
      }
    ]),
  ],
};
