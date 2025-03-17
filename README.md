# Luthien Website

Static website for Luthien, an organization focused on production-ready AI Control.

## Development

- **Install dependencies**: `npm install`
- **Start development server**: `npm start`
- **Build for production**: `npm run build`

## Project Structure

- `src/` - Source files and templates
  - `_data/` - Site configuration and global data
  - `_includes/` - Reusable layouts and components
  - `updates/` - Markdown files for blog/updates section
- `assets/` - Static assets (CSS, images, etc.)
- `_site/` - Generated output (not committed to git)

## Technologies

- [Eleventy](https://www.11ty.dev/) - Static site generator
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating engine

## Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch.