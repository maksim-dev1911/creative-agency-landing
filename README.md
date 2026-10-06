# Creative Agency Landing

A responsive landing page for a creative digital agency. Built with semantic HTML and SCSS, compiled via Gulp.

## Overview

The page presents a creative agency brand with sections for:

- **Header** — logo, navigation, and contact CTA
- **Banner** — hero headline, project CTA, and social proof
- **About Us** — team introduction and story
- **Services** — Social Media Management, Design, SEO, Ads
- **Portfolio** — selected project showcase
- **Testimonials** — client feedback cards

## Tech Stack

- HTML5
- SCSS (Sass)
- Gulp 4 + `gulp-sass` / Dart Sass
- Google Fonts (Nunito, Quicksand)

## Project Structure

```
src/
├── index.html          # Main page markup
├── images/             # Assets (logo, icons, portfolio, etc.)
├── scss/
│   ├── index.scss      # Main styles and section layouts
│   ├── variables.scss  # Colors and layout tokens
│   ├── mixins.scss
│   └── components/     # Reusable UI partials (button, title, etc.)
└── css/                # Compiled CSS (generated, gitignored)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Install

```bash
npm install
```

### Develop

Watch SCSS files and rebuild CSS on change:

```bash
npm run watch
```

Compile styles once:

```bash
npm run build
```

Or run the default Gulp task:

```bash
npm run gulp
```

Open `src/index.html` in your browser to view the page. After editing SCSS, refresh the browser to see updated styles.

## Scripts

| Script          | Description                          |
|-----------------|--------------------------------------|
| `npm run watch` | Watch SCSS and recompile on changes  |
| `npm run build` | Compile SCSS to CSS once             |
| `npm run gulp`  | Run the default Gulp task            |

## Styling Notes

- Layout uses a max container width of `1240px`
- Primary accent color: `#377DFF`
- Component styles live under `src/scss/components/` and are imported into `index.scss`
- Compiled output is written to `src/css/` (ignored by Git)

## License

ISC
