export default async function (eleventyConfig) {
  // Copy `dist/` to `_site/dist`
  eleventyConfig.addPassthroughCopy("dist");

  // Filter: Stringify JSON
  eleventyConfig.addFilter("json", function (value) {
    return JSON.stringify(value, null, 2);
  });

  /* 
     Return your Object options:
  */
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      markdownTemplateEngine: "njk",
    },
  };
}
