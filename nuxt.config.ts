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

  routeRules: {
    "/**": { prerender: true },
  },

  // Opsi eksperimental payload extraction (opsional, bagus untuk SSG)
  experimental: {
    payloadExtraction: true,
  },

  runtimeConfig: {
    public: {
      // App
      appUrl: "",
      dashboardAppUrl: "",
      themeUrl: "",

      // API
      apiBaseUrl: "",
    },
  },

  // Validasi build-time
  hooks: {
    "build:before": () => {
      const required = ["NUXT_PUBLIC_APP_URL", "NUXT_PUBLIC_API_BASE_URL"];

      const missing = required.filter((key) => !process.env[key]);

      if (missing.length && process.env.NODE_ENV === "production") {
        throw new Error(`Missing required env vars: ${missing.join(", ")}`);
      }
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
