export default defineEventHandler(async (event) => {
  const baseURL = "https://ea-invitation-landing.vercel.app";

  const routes = [
    { url: "/", changefreq: "daily", priority: "1.0" },
    { url: "/tutorial", changefreq: "monthly", priority: "0.5" },
    { url: "/themes", changefreq: "monthly", priority: "0.5" },
    { url: "/login", changefreq: "monthly", priority: "0.3" },
    { url: "/register", changefreq: "monthly", priority: "0.3" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseURL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
`
  )
  .join("")}
</urlset>`;

  setHeader(event, "content-type", "application/xml");
  return sitemap;
});
