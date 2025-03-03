# Luthien Site Implementation Plan

## Structure with 11ty (Eleventy)

### Folder Structure
```
luthien_site/
├── _includes/           # Reusable components
│   ├── navigation.njk   # Navigation with donate button
│   ├── header.njk       # Site header
│   └── footer.njk       # Site footer
├── _data/               # Site data
│   └── site.json        # Site-wide variables
├── pages/               # Content pages
│   ├── index.njk        # Home page
│   └── about.njk        # About page
├── assets/              # Static assets
│   ├── css/             # Stylesheets
│   └── images/          # Images
├── .eleventy.js         # Eleventy config
└── package.json         # Dependencies
```

### Implementation Steps

1. **Set up Eleventy**:
   ```bash
   npm init -y
   npm install @11ty/eleventy --save-dev
   ```

2. **Create reusable components**:
   - Navigation with donate button
   - Page templates with common structure

3. **Migrate current content**:
   - Move HTML into Nunjucks templates
   - Keep CSS structure intact

4. **Add configuration**:
   - Basic .eleventy.js file for paths
   - Site metadata in _data/site.json

### Benefits

- **DRY code**: Make changes to common elements in one place
- **Maintainability**: Easier to add new pages that follow the same pattern
- **Future extensibility**: Simple to add collections, tags, or more structured content
- **Development workflow**: Live reload during development

### Alternative Simple Approach

If you prefer to avoid a build step entirely, you could use JavaScript to include HTML:

```javascript
// common-elements.js
document.addEventListener('DOMContentLoaded', function() {
  fetch('components/navigation.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('nav-placeholder').innerHTML = html;
    });
});
```

This is less robust but requires no build process.