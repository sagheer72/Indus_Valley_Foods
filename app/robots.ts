import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://indusvalley-foods.com/sitemap.xml',
    host: 'https://indusvalley-foods.com',
  };
}
