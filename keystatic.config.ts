// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    categories: collection({
      label: "Categories",
      slugField: "name",
      path: "src/content/categories/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
      },
    }),
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        created_on: fields.datetime({
          label: "Created on",
          description: "Date & time article was created",
        }),
        banner: fields.image({ label: "Banner Image" }),
        summary: fields.text({
          label: "Summary",
          multiline: true,
        }),
        category: fields.relationship({
          label: "Category",
          description: "Category of the post",
          collection: "categories",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/content/posts/_images",
            publicPath: "/src/content/posts/_images/",
            schema: {
              title: fields.text({
                label: "Caption",
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
        }),
      },
    }),
  },
});
