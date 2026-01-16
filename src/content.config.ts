import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    type: z.enum(['article', 'pdf']),
    client: z.string().optional(),
    pdfUrl: z.string().optional(),
  }),
});

const textes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    category: z.enum(['poème', 'texte court', 'réflexion']),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  portfolio,
  textes,
  pages,
};
