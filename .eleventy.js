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