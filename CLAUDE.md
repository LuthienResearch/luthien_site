# Luthien Site Guide

## Development Commands
- **Local Preview**: `python -m http.server` (runs a simple HTTP server in the project directory)
- **HTML Validation**: `npx html-validate *.html` (requires npm install -g html-validate)
- **CSS Validation**: `npx stylelint "*.css"` (requires npm install -g stylelint)

## Project Structure
- Static HTML/CSS/JS files only
- External CSS in styles.css for consistent styling across pages
- No build process currently needed
- Deployed via GitHub Pages or similar static hosting

## Style Guidelines
- **HTML**: Use HTML5 semantic elements, lowercase tags, double quotes for attributes
- **CSS**: Maintain styles in the external styles.css file
- **Naming**: Use descriptive, kebab-case for files and CSS classes (e.g., `about.html`, `.hero-image`)
- **Formatting**: 4-space indentation, UTF-8 encoding
- **Colors**: Main palette: Background #0a0a0a, Text #ffffff, Accent #4a9eff, Muted #888
- **Media**: When adding images, compress them before adding to the repository
- **Accessibility**: Include proper alt text for images, maintain good color contrast

## Git Workflow
- Commit small, focused changes with descriptive messages
- Use GitHub UI or git CLI for repository management