<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- END OF PROJECT SHIELDS -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <a href="#">
        <img src="public/img/logo.png" alt="Logo" height="180">
    </a>
    <h3><a href="https://bpm-crafters.dev">BPM-Crafters Website and Documentation </a></h3>
    <p>
        <a href="https://github.com/bpm-crafters/website/issues">Report Bug</a>
        ·
        <a href="https://github.com/bpm-crafters/website/pulls">Request Feature</a>
    </p>
</div>

This repository contains the BPM-Crafters website as well as various best-practices and the api-client-documentation which can be found under [https://bpm-crafters.dev](https://bpm-crafters.dev)

## Documentation Guidelines
### PRs for every change
All changes have to be done in a separate Branch. As soon as the changes are done please open a PR. A GitHub Action runs 
with every commit to a Branch and checks if the documentation can be built. If you create a new branch make sure to name it according 
to what it does (e.g. feat/xyz or fix/xyz). Please use semantic commit messages as described in [here](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716).

### Structure
Name Markdown files according to the title. This makes it easier to find a file.
Avoid non-alphanumeric characters in titles. Use the file name as an internal document id to reference in the appropriate sidebars file.

### Style Guide 
We will be using the writing [style guide defined by Camunda](https://github.com/camunda/camunda-platform-docs/blob/main/howtos/technical-writing-styleguide.md).
It outlines writing techniques and practices to ensure uniform styling across documentation and to yield a more cohesive and organized user experience.

## Setup
### Installation 
`npm install`

### Local Development 
`npm run dev` (alias: `npm run start`) — starts the VitePress dev server with hot reload.
`npm run build` — builds the static site into `./build`.
`npm run preview` — serves the production build locally.

### Troubleshooting Checklist
Have you pulled latest from `main`?
Have you run npm install? When we update dependencies in the project, they don't automatically get updated in your environment.
You'll need to run npm install occasionally to acquire dependency updates locally.

### Creating new files 
Documentation pages live under `docs/` and are served at `/docs/<filename>`. A new page should contain a proper frontmatter header: 
```
---
title: Best Practices Overview
description: "This section provides an overview of the different BPM Best Practices."
---

# Best Practices Overview
```
To list the page in the sidebar, add it to the `themeConfig.sidebar` array in [.vitepress/config.ts](./.vitepress/config.ts).

## Configuration
This documentation is built using [VitePress](https://vitepress.dev), a modern static site generator powered by Vite and Vue.
The site is configured in [.vitepress/config.ts](./.vitepress/config.ts) (navigation, sidebar, footer, social links). Config options are documented at https://vitepress.dev/reference/site-config.
The landing page and shared theme live in [.vitepress/theme/](./.vitepress/theme/); static assets (images, `CNAME`) live in [public/](./public). The production build is emitted to `./build` and deployed to GitHub Pages by the `Release Docs` workflow.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/bpm-crafters/website.svg?style=for-the-badge
[contributors-url]: https://github.com/bpm-crafters/website/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/bpm-crafters/website.svg?style=for-the-badge
[forks-url]: https://github.com/bpm-crafters/website/network/members

[stars-shield]: https://img.shields.io/github/stars/bpm-crafters/website.svg?style=for-the-badge
[stars-url]: https://github.com/bpm-crafters/website/stargazers

[issues-shield]: https://img.shields.io/github/issues/bpm-crafters/website.svg?style=for-the-badge
[issues-url]: https://github.com/bpm-crafters/website/issues
