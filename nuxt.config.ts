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
  image: {
    format: ["webp", "jpg"],
    quality: 80,
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
      "Website undangan pernikahan digital yang elegan dan interaktif. Wujudkan momen bahagia pernikahan Anda dengan undangan digital modern.",
    defaultLocale: "id",
  },
  seo: {
    meta: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      themeColor: "#ffffff",
    },
  },
  robots: {
    allow: ["/", "/tutorial", "/themes", "/login", "/register"],
    disallow: ["/admin", "/dashboard"],
    sitemap: "https://ea-invitation-landing.vercel.app/sitemap.xml",
  },
  sitemap: {
    hostname: "https://ea-invitation-landing.vercel.app",
    gzip: true,
    routes: ["/", "/tutorial", "/themes", "/login", "/register"],
  },
  ogImage: {
    enabled: true,
    defaults: {
      extension: "png",
      width: 1200,
      height: 630,
    },
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "EA Invitation",
      url: "https://ea-invitation-landing.vercel.app",
      logo: "https://ea-invitation-landing.vercel.app/favicon.png",
    },
  },
  linkChecker: {
    enabled: true,
    excludeLinks: ["mailto:*", "tel:*"],
  },
});
