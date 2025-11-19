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
      appUrl: process.env.APP_URL || "http://localhost:3000",
      dashboardAppUrl: process.env.DASHBOARD_APP_URL || "http://localhost:3001",
      themeUrl: process.env.THEME_URL || "http://localhost:3002",

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
    url: "https://eainvitation.com", // Ganti dengan domain production asli Anda (JANGAN localhost)
    name: "EA Invitation",
    description:
      "Platform Undangan Pernikahan Digital - Buat undangan pernikahan online yang modern, elegan, dan interaktif.",
    defaultLocale: "id", // Target audiens Indonesia
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
