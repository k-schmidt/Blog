# Kyle Schmidt's Personal Blog

A personal blog built with [Astro](https://astro.build).
Powers [www.kyle-a-schmidt.com](https://www.kyle-a-schmidt.com).

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── BlogPost.astro
│   │   ├── Header.astro
│   │   └── Navigation.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── MarkdownPostLayout.astro
│   ├── pages/
│   │   ├── posts/
│   │   ├── tags/
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |

## Adding Blog Posts

Create a new `.md` file in `src/pages/posts/` with the following frontmatter:

```md
---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Post Title'
pubDate: 2025-01-01
description: 'A short description'
author: 'Kyle Schmidt'
tags: ["tag1", "tag2"]
---

Your content here...
```

Posts are automatically sorted by date (newest first) on the home page.
