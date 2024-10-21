import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { animate } from "motion";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
});