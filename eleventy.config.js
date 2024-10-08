export default async function (eleventyConfig) {
  // Copy `dist/` to `_site/dist`
  eleventyConfig.addPassthroughCopy("dist");

  // Copy '_headers' to '_site/_headers' which is used by netlify dev and Visua Editor
  eleventyConfig.addPassthroughCopy("_headers");

  // Filter: Stringify JSON
  eleventyConfig.addFilter("json", function (value) {
    return JSON.stringify(value, null, 2);
  });

  eleventyConfig.setServerOptions({
    // Show local network IP addresses for device testing
    showAllHosts: true,
  });

  /* 
     Return your Object options:
  */
  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      markdownTemplateEngine: "njk",
    },
  };
}
