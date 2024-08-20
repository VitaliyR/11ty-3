// stackbit.config.js
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "eleventy",
  devCommand: "npx eleventy --serve",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "nve_content/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }],
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "_site",
        uploadDir: "images",
        publicPath: "/",
      },
    }),
  ],
});
