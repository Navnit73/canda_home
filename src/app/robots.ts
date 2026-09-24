import { MetadataRoute } from 'next';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${COMPANY_CONFIG.meta.siteUrl}/sitemap.xml`,
  };
}
