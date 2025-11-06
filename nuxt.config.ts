// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "bootstrap-icons/font/bootstrap-icons.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/color-mode", "@nuxt/image", "@nuxtjs/seo", "@pinia/nuxt"],
  colorMode: {
    classSuffix: "",
  },
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  runtimeConfig: {
    public: {
      // App
      appUrl: process.env.APP_URL || "http://localhost:3000",
      dashboardAppUrl: process.env.DASHBOARD_APP_URL || "http://localhost:3001",

      // API
      apiBaseUrl: process.env.API_BASE_URL || "http://127.0.0.1:8000/api",
      storageBaseUrl:
        process.env.STORAGE_BASE_URL || "http://127.0.0.1:8000/storage",

      // Themes Base URL
      themeMap: {
        instagram: process.env.THEME_INSTAGRAM_URL || "http://localhost:4000",
      },
    },
  },
  site: {
    url: "https://ea-invitation-landing.vercel.app", // Ganti dengan domain Anda
    name: "EA Invitation",
    description:
      "Platform undangan pernikahan digital yang elegan dan interaktif. Wujudkan momen bahagia pernikahan Anda dengan undangan digital modern.",
    defaultLocale: "id",
  },
  seo: {
    redirectToCanonicalSiteUrl: true,

    // Meta tags default
    meta: {
      themeColor: "#8B5CF6", // Sesuaikan dengan brand color
    },
  },
  sitemap: {
    enabled: true,
    strictNuxtContentPaths: true,
    autoLastmod: true,
    defaults: {
      changefreq: "weekly",
      priority: 0.5,
    },
    urls: async () => {
      // Tambahkan URL dinamis dari database/API jika ada
      // Contoh: event-event yang sudah dibuat users
      return [
        {
          loc: "/templates/wedding",
          priority: 0.8,
          changefreq: "monthly",
        },
        {
          loc: "/templates/birthday",
          priority: 0.8,
          changefreq: "monthly",
        },
      ];
    },
    exclude: ["/admin/**", "/dashboard/**", "/api/**"],
  },
  robots: {
    enabled: true,
    disallow: [
      "/admin",
      "/dashboard",
      "/api",
      "/preview/**",
      "/*?token=*", // Block URLs dengan token
    ],
    allow: ["/", "/themes", "/tutorial"],
  },
  ogImage: {
    enabled: true,
    componentDirs: ["og-image"],
    defaults: {
      component: "Default",
      width: 1200,
      height: 630,
      cacheMaxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
    },
  },
  schemaOrg: {
    enabled: true,
    identity: {
      type: "Organization",
      name: "EA Invitation",
      url: "https://eainvitation.com",
      logo: "https://eainvitation.com/logo.png",
      sameAs: [
        "https://instagram.com/ea_invitation",
        "https://tiktok.com/ea-invitation",
        "https://twitter.com/ea_invitation",
      ],
    },
  },
  linkChecker: {
    enabled: true,
    excludeLinks: ["https://facebook.com/**", "https://twitter.com/**"],
  },
});
