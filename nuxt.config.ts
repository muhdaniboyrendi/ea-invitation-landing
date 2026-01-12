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
    url: "https://eainvitation.com", // Pastikan tanpa www
    name: "EA Invitation",
    description:
      "EA Invitation adalah platform undangan pernikahan digital berbasis web dengan berbagai tema yang modern dan interaktif. Berbagai fitur lengkap untuk membuat undangan pernikahan impianmu.",
    defaultLocale: "id",
    indexable: true,
  },

  // ✅ TAMBAHKAN INI: Konfigurasi SEO Utils
  seo: {
    enabled: true,
    automaticDefaults: true, // Aktifkan default meta otomatis
  },

  // ✅ REDIRECT www ke non-www
  nitro: {
    routeRules: {
      // Redirect www ke non-www dengan 301
      "https://www.eainvitation.com/**": {
        redirect: {
          to: "https://eainvitation.com/**",
          statusCode: 301,
        },
      },
    },
  },

  robots: {
    disallow: ["/admin", "/secret"],
    sitemap: "/sitemap.xml",
  },

  sitemap: {
    sources: [],
    // ✅ Pastikan hanya canonical URL di sitemap
    urls: async () => {
      return [
        { loc: "/themes", changefreq: "weekly", priority: 0.8 },
        { loc: "/tutorial", changefreq: "monthly", priority: 0.7 },
        { loc: "/terms", changefreq: "yearly", priority: 0.3 },
      ];
    },
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
