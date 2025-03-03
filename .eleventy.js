const fs = require('fs');
const path = require('path');

// Configuration for building the site
module.exports = function(eleventyConfig) {
  // Copy the assets directory to the output
  eleventyConfig.addPassthroughCopy("assets");
  
  // URL filter for deployment (absolute paths)
  eleventyConfig.addFilter("url", function(url) {
    return url;
  });
  
  // After the build is complete, create a local-preview version
  eleventyConfig.on('afterBuild', async () => {
    console.log('Creating local preview versions...');
    
    // Create a simple local HTML file for browsing
    const localIndexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Development</title>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: #0d1117;
            color: #f0f6fc;
        }
        h1 {
            border-bottom: 1px solid #30363d;
            padding-bottom: 0.5rem;
        }
        a {
            color: #58a6ff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .files {
            background: #161b22;
            border-radius: 6px;
            padding: 1rem;
        }
        .note {
            font-size: 0.9rem;
            color: #8b949e;
            margin-top: 2rem;
            padding: 1rem;
            background: #30363d;
            border-radius: 6px;
        }
    </style>
</head>
<body>
    <h1>Luthien Site - Local Preview</h1>
    <p>These files are for local development and testing.</p>
    
    <div class="files">
        <h2>Pages:</h2>
        <p><a href="file://${path.join(__dirname, 'public/index.html')}">Home Page</a></p>
        <p><a href="file://${path.join(__dirname, 'public/about/index.html')}">About Page</a></p>
        <p><a href="file://${path.join(__dirname, 'public/button-test.html')}">Button Test Page</a></p>
    </div>
    
    <div class="note">
        <strong>Note:</strong> These links open the raw HTML files with <code>file://</code> protocol.
        For a more realistic preview with proper paths, use <code>npm start</code> to launch the development server.
    </div>
</body>
</html>`;

    // Write the local preview HTML
    const localPreviewDir = path.join(__dirname, 'local-preview');
    if (!fs.existsSync(localPreviewDir)) {
      fs.mkdirSync(localPreviewDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(localPreviewDir, 'index.html'), localIndexHtml);
    console.log('Local preview index created successfully!');
  });
  
  // Set directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk"
  };
};