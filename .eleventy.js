// Configuration for building the site
module.exports = function(eleventyConfig) {
  // Copy the assets directory to the output
  eleventyConfig.addPassthroughCopy("assets");
  
  // URL filter for deployment (absolute paths)
  eleventyConfig.addFilter("url", function(url) {
    return url;
  });
  
  // Add a collection for updates
  eleventyConfig.addCollection("updates", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/updates/*.md").sort((a, b) => {
      return b.date - a.date; // Sort in reverse chronological order
    });
  });
  
  // Format date filter
  eleventyConfig.addFilter("formatDate", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  // RFC3339 date filter for RSS/Atom feeds
  eleventyConfig.addFilter("dateToRfc3339", function(date) {
    return new Date(date).toISOString();
  });
  
  // Get newest date in a collection
  eleventyConfig.addFilter("getNewestCollectionItemDate", function(collection) {
    if (collection.length === 0) {
      return new Date();
    }
    
    return new Date(Math.max(...collection.map(item => item.date)));
  });
  
  // Convert HTML links to absolute URLs for feeds
  eleventyConfig.addFilter("htmlToAbsoluteUrls", function(content, baseUrl) {
    return content.replace(/href="\/(?!\/)/g, `href="${baseUrl}/`);
  });
  
  // Set directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};