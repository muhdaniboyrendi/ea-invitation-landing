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

  runtimeConfig: {
    public: {
      // App
      appUrl: process.env.NUXT_PUBLIC_APP_URL || "http://localhost:3000",
      dashboardAppUrl:
        process.env.NUXT_PUBLIC_DASHBOARD_APP_URL || "http://localhost:3001",
      themeUrl: process.env.NUXT_PUBLIC_THEME_URL || "http://localhost:3002",

      // API
      apiBaseUrlPublic: process.env.NUXT_PUBLIC_API_BASE_URL_PUBLIC,
      storageBaseUrlPublic: process.env.NUXT_PUBLIC_STORAGE_BASE_URL_PUBLIC,
      apiBaseUrl: process.env.API_BASE_URL,
      storageBaseUrl: process.env.STORAGE_BASE_URL,
    },
  },

  site: {
    url: "https://eainvitation.com",
    name: "EA Invitation",
    description:
      "Platform Undangan Pernikahan Digital - Buat undangan pernikahan online yang modern, elegan, dan interaktif.",
    defaultLocale: "id",
    indexable: true, // Ubah ke false hanya saat development
  },

  sitemap: {
    sources: [
      //
    ],
  },

  robots: {
    // Mencegah bot meng-crawl halaman admin/login dashboard dari sini jika ada link langsung
    disallow: ["/admin", "/secret"],
  },
});
