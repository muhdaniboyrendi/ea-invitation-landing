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
      title: "EA Invitation", // default fallback title
      htmlAttrs: {
        lang: "id",
      },
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
    exclude: ["/admin/**", "/dashboard/**", "/api/**"],
  },
  robots: {
    enabled: true,
    disallow: [
      "/admin",
      "/dashboard",
      "/preview/**",
      "/*?token=*", // Block URLs dengan token
    ],
    allow: "/",
  },
  ogImage: {
    enabled: true,
    defaults: {
      width: 1200,
      height: 630,
      component: "OgImage",
    },
  },
  schemaOrg: {
    enabled: true,
    identity: {
      type: "Organization",
      name: "EA Invitation",
      url: process.env.APP_URL || "http://localhost:3000",
      logo: "/favicon.png",
      sameAs: [
        "https://instagram.com/ea_invitation",
        "https://tiktok.com/ea-invitation",
        "https://twitter.com/ea_invitation",
      ],
    },
  },
  linkChecker: {
    enabled: true,
    excludeLinks: ["https://instagram.com/**"],
  },
});
