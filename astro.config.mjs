// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: "https://kyle-astro-blog-tutorial.netlify.app/",
    integrations: [react()],
});
