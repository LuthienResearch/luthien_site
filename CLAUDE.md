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
- `src/_data/site.json` - Site metadata (title, description, contact email, important URLs)
  - Contains URLs for GitHub repo, donation page, etc.
- `src/_includes/base.njk` - Base layout template
- `src/_includes/navigation.njk` - Navigation bar with shields.io style badges
- `src/_includes/update.njk` - Layout for individual update posts
- `src/index.njk` - Homepage with shields.io badges and linked title/tagline
- `src/about.njk` - About page
- `src/updates.njk` - Updates listing page
- `src/feed.njk` - RSS feed template
- `assets/css/styles.css` - Main stylesheet (contains all badge styling)

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
- **Shields.io Badge Colors**:
  - GitHub: Dark `#24292e` & Green `#2cbe4e`
  - Updates: Indigo `#4F46E5` & Light Indigo `#818CF8`
  - Contact: Purple `#7C3AED` & Light Purple `#A78BFA`
  - Donate: Teal `#0F766E` & Light Teal `#14B8A6`
- **Media**: Compress images before adding to the repository
- **Accessibility**: Include proper alt text for images, maintain good color contrast

## Shields.io Badges
The site uses shields.io style badges for navigation and links:

- **Structure**: Each badge consists of:
  ```html
  <a href="url" class="shields-badge badge-type">
    <span class="badge-left badge-type-left">
      <svg><!-- Icon SVG --></svg>
    </span>
    <span class="badge-right badge-type-right">Label</span>
  </a>
  ```

- **Badge Types**:
  - `main-badge`: GitHub repository (Luthien Control)
  - `updates-badge`: Updates page
  - `contact-badge`: Email contact
  - `donate-badge`: Donation page

- **Consistency**: When adding new badges, maintain the same structure and create appropriate color variables
- **Mobile**: Badges are responsive and stack vertically on mobile screens
- **Icons**: Uses Simple Icons (https://simpleicons.org/) for visual identification

## Build and Preview
- For local development, use `npm start` to run the development server with live reload
- NEVER edit generated files in _site/ directly - they are built from source files

## Homepage Link Structure
The homepage elements are designed to be interactive:

- **Site Title**: The "LUTHIEN" header links to the Updates page
- **Tagline**: "Production-Ready AI Control" links to the GitHub repository
- **Badges**: Four shields.io style badges link to:
  - Luthien Control (GitHub repository)
  - Updates page
  - Contact email
  - Donation page (Manifund)

## CSS Troubleshooting
- **Selector Specificity**: Use `.nav a.badge-class` instead of just `.badge-class` to override navigation styles
- **Badge Height**: All badges have a consistent height of 1.5rem with box-sizing set to border-box
- **Important Declarations**: Use `!important` sparingly, but it's appropriate for ensuring badge text colors
- **Testing Changes**: When making CSS changes, always check both the home and about pages to ensure consistent styling
- **Navigation Elements**: Always make sure navigation links and badges have sufficient contrast (WCAG AA minimum)
- **Mobile Testing**: Verify all changes in mobile view as the navigation and badges collapse to a vertical layout
- **Badge Alignment**: When working with badges, ensure they maintain proper vertical alignment by using `display: flex` and `align-items: center`

## Deployment
- Automatically deploys to Netlify when pushed to main branch
- Configuration in netlify.toml

## Future Improvements
- Consider adding a favicon
- Add meta tags for SEO and social sharing
- Implement proper site analytics
- Create a dedicated donations page with multiple options
- Add smooth transitions between pages
- Implement a dark/light mode toggle
- Add GitHub stars counter to the Luthien Control badge
- Create a responsive image gallery for project screenshots
- Add more interactive elements to engage visitors