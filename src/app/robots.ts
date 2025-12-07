import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // TODO: Update this to your actual production domain
    const baseUrl = 'https://ues.co.il';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
