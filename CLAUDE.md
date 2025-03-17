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

## Key Files Summary
- `src/_data/site.json` - Site metadata (title, description, contact email, donation URL)
- `src/_includes/base.njk` - Base layout template
- `src/_includes/navigation.njk` - Navigation bar
- `src/_includes/update.njk` - Layout for individual update posts
- `src/index.njk` - Homepage
- `src/about.njk` - About page
- `src/updates.njk` - Updates listing page
- `src/feed.njk` - RSS feed template
- `assets/css/styles.css` - Main stylesheet

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
  - Button background: `--button-bg: #0969da` (with white text for high contrast)
- **Media**: Compress images before adding to the repository
- **Accessibility**: Include proper alt text for images, maintain good color contrast

## Build and Preview
- For local development, use `npm start` to run the development server with live reload
- NEVER edit generated files in _site/ directly - they are built from source files

## CSS Troubleshooting
- **Selector Specificity**: Use `.nav a.button-class` instead of just `.button-class` to override navigation styles
- **Important Declarations**: Use `!important` sparingly, but it's appropriate for ensuring button text colors
- **Testing Changes**: When making CSS changes, always check both the home and about pages to ensure consistent styling
- **Navigation Elements**: Always make sure navigation links and buttons have sufficient contrast (WCAG AA minimum)
- **Mobile Testing**: Verify all changes in mobile view as the navigation collapses to a vertical layout

## Deployment
- Automatically deploys to Netlify when pushed to main branch
- Configuration in netlify.toml

## Future Improvements
- Consider adding a favicon
- Add meta tags for SEO and social sharing
- Implement proper site analytics
- Create a dedicated donations page with multiple options
- Add smooth transitions between pages