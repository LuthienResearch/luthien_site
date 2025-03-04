// Configuration for building the site
module.exports = function(eleventyConfig) {
  // Copy the assets directory to the output
  eleventyConfig.addPassthroughCopy("assets");
  
  // URL filter for deployment (absolute paths)
  eleventyConfig.addFilter("url", function(url) {
    return url;
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
    htmlTemplateEngine: "njk"
  };
};