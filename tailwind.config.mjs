/** @type {import('tailwindcss').Config} */
import tailwindPluginTypography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#626A5D",
      },
    },
  },
  plugins: [tailwindPluginTypography()],
};
