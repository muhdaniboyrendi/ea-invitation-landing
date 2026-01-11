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
      "EA Invitation adalah platform undangan pernikahan digital berbasis web dengan berbagai tema yang modern dan interaktif. Berbagai fitur lengkap untuk membuat undangan pernikahan impianmu.",
    defaultLocale: "id",
    indexable: true,
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
        // Favicon
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        // Google Fonts
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
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-H30QSK9F1H",
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H30QSK9F1H');
          `,
        },
      ],
    },
  },
});
