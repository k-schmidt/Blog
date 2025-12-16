# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/tutorial website built with Astro, currently following the Astro introductory tutorial. The site features a home page, an about page, and a blog with Markdown posts.

## Commands

All commands are run from the root of the project:

- `npm install` - Install dependencies
- `npm run dev` - Start local dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview build locally before deploying
- `npm run astro ...` - Run Astro CLI commands (e.g., `astro add`, `astro check`)

## Architecture

### File-based Routing
- Pages are created as `.astro` files in `src/pages/`
- Each file becomes a route based on its filename
  - `src/pages/index.astro` → `/`
  - `src/pages/about.astro` → `/about/`
  - `src/pages/blog.astro` → `/blog/`

### Blog Posts
- Markdown blog posts live in `src/pages/posts/`
- Posts use frontmatter for metadata (title, pubDate, description, author, image, tags)
- Posts are accessible at `/posts/[filename]/` (e.g., `/posts/post-1/`)
- The blog page (`src/pages/blog.astro`) manually links to individual posts

### Astro Component Structure
Astro files have two main sections separated by frontmatter fences (`---`):
1. **Frontmatter** (top section between `---`): JavaScript/TypeScript code that runs at build time
   - Define variables, fetch data, import components
   - Example: `const pageTitle = "Home Page";`
2. **Template** (bottom section): HTML markup with dynamic expressions
   - Use curly braces `{}` for JavaScript expressions
   - Example: `<h1>{pageTitle}</h1>`

### Styling
- Scoped styles are defined inline using `<style>` tags within `.astro` files
- CSS custom properties can be passed from frontmatter using `define:vars`
- Example: `<style define:vars={{skillColor, fontWeight}}>`

## Development Notes

- The site uses TypeScript with strict Astro configuration (`extends: "astro/tsconfigs/strict"`)
- Static assets go in the `public/` directory
- Navigation is currently manually duplicated across pages (not using a layout or component yet)
- The about page demonstrates Astro's dynamic features: expressions, conditionals, loops, and CSS variables
