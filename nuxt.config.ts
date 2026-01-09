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

  experimental: {
    payloadExtraction: true,
  },

  site: {
    url: "https://eainvitation.com",
    name: "EA Invitation",
    description:
      "Platform Undangan Pernikahan Digital - Buat undangan pernikahan digital yang modern, elegan, dan interaktif.",
    defaultLocale: "id",
    indexable: true, // Pastikan indexable true
  },

  robots: {
    disallow: ["/admin", "/secret"],
    sitemap: "/sitemap.xml",
  },

  sitemap: {
    sources: [],
  },

  runtimeConfig: {
    public: {
      appUrl: "",
      dashboardAppUrl: "",
      themeUrl: "",
      apiBaseUrl: "",
    },
  },

  hooks: {
    "build:before": () => {
      const required = ["NUXT_PUBLIC_APP_URL", "NUXT_PUBLIC_API_BASE_URL"];
      const missing = required.filter((key) => !process.env[key]);
      if (missing.length && process.env.NODE_ENV === "production") {
        throw new Error(`Missing required env vars: ${missing.join(", ")}`);
      }
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cantata+One&family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&display=swap",
          media: "print",
          onload: "this.media='all'",
        },
      ],
      script: [],
    },
  },
});
