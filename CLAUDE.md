# Luthien Site Guide

## Development Commands
- **Local Development**: `npm start` (runs Eleventy with live reload)
- **Build for Production**: `npm run build` (generates static site in _site directory)
- **HTML Validation**: `npx html-validate _site/**/*.html` (requires npm install -g html-validate)
- **CSS Validation**: `npx stylelint "assets/css/*.css"` (requires npm install -g stylelint)

## Project Structure
- **Eleventy-based static site**
- `src/` - Source files and templates
- `src/_includes/` - Reusable components and layouts
- `src/_data/` - Site configuration and global data
- `assets/css/` - CSS stylesheets
- `_site/` - Generated output (not committed to git)

## Style Guidelines
- **Templates**: Use Nunjucks (.njk) for templating
- **HTML**: Use HTML5 semantic elements, lowercase tags, double quotes for attributes
- **CSS**: Maintain styles in external CSS files
- **Naming**: Use descriptive, kebab-case for files and CSS classes
- **Formatting**: 4-space indentation, UTF-8 encoding
- **Colors**: Main palette defined in CSS variables:
  - Background: `--bg-dark: #0d1117`
  - Primary text: `--text-primary: #f0f6fc`
  - Secondary text: `--text-secondary: #8b949e`
  - Content text: `--content-text: #c9d1d9`
  - Accent blue: `--accent-blue: #58a6ff`
  - Button background: `--button-bg: #1f6feb`
- **Media**: Compress images before adding to the repository
- **Accessibility**: Include proper alt text for images, maintain good color contrast

## Deployment
- Automatically deploys to Netlify when pushed to main branch
- Configuration in netlify.toml