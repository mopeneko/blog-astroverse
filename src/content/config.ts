import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      lastModified: z.string().optional(),
      cover: image()
        .refine((img) => img)
        .optional(),
      coverAlt: z.string().optional(),
      category: z.array(z.string()),
      tags: z.array(z.string()),
      author: z.string(),
    }),
});

export const collections = { posts };
