// Build configuration for both deployment and local preview
const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Copy the `assets` directory to the outputs
  eleventyConfig.addPassthroughCopy("assets");
  
  // Add filter for deployment URLs (absolute paths)
  eleventyConfig.addFilter("deployUrl", function(url) {
    return url;
  });
  
  // Add filter for local URLs (relative paths)
  eleventyConfig.addFilter("localUrl", function(url) {
    // Remove leading slash for local file browsing
    return url.replace(/^\//, '');
  });
  
  // After the build is complete, create a parallel local-preview version
  eleventyConfig.on('afterBuild', () => {
    console.log('Creating local preview versions...');
    
    // Read the generated HTML files
    const publicDir = path.join(__dirname, 'public');
    const localPreviewDir = path.join(__dirname, 'local-preview');
    
    // Ensure local-preview directory exists
    if (!fs.existsSync(localPreviewDir)) {
      fs.mkdirSync(localPreviewDir, { recursive: true });
    }
    
    // Copy over the assets
    fs.cpSync(path.join(__dirname, 'assets'), path.join(localPreviewDir, 'assets'), { recursive: true });
    
    // Function to process HTML files for local viewing
    const processHtmlFile = (file, sourceDir, destDir) => {
      const content = fs.readFileSync(path.join(sourceDir, file), 'utf8');
      
      // Determine depth based on the directory structure
      const depth = file.split('/').length - 1;
      const prefix = depth > 0 ? '../'.repeat(depth) : '';
      
      // Transform absolute paths to relative
      let localContent = content
        .replace(/href="\//g, `href="${prefix}`)
        .replace(/src="\//g, `src="${prefix}`)
        .replace(/href="index/g, 'href="index')
        .replace(/href="about\//g, 'href="about');
        
      // Fix CSS paths for subdirectories
      if (depth > 0) {
        localContent = localContent.replace(/href="assets\//g, `href="../assets/`);
      }
      
      fs.writeFileSync(path.join(destDir, file), localContent);
    };
    
    // Copy and transform all HTML files in the public directory
    const processDirectory = (sourceDir, destDir, parentPath = '') => {
      const items = fs.readdirSync(sourceDir, { withFileTypes: true });
      
      items.forEach(item => {
        const srcPath = path.join(sourceDir, item.name);
        const destPath = path.join(destDir, item.name);
        const relativePath = parentPath ? path.join(parentPath, item.name) : item.name;
        
        if (item.isDirectory()) {
          if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath, { recursive: true });
          }
          processDirectory(srcPath, destPath, relativePath);
        } else if (item.name.endsWith('.html')) {
          processHtmlFile(relativePath, sourceDir, destDir);
        } else {
          // Copy non-HTML files directly
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };
    
    // Process the public directory recursively
    processDirectory(publicDir, localPreviewDir);
    
    console.log('Local preview versions created successfully!');
  });
  
  // Set custom directories for input, output, includes, and data
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