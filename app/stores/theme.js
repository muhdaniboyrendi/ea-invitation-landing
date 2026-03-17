export const useThemeStore = defineStore("theme", () => {
  const themes = ref([
    {
      id: 1,
      theme_category_id: 3,
      name: "Instagram",
      slug: "instagram",
      thumbnail: "/img/themes/instagram.webp",
      is_premium: true,
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/instagram.webp",
      theme_category: {
        id: 3,
        name: "Social",
        description: null,
        created_at: "2026-01-06T03:45:06.000000Z",
        updated_at: "2026-01-06T03:45:06.000000Z",
      },
    },
    {
      id: 2,
      theme_category_id: 4,
      name: "Japanese",
      slug: "japanese",
      thumbnail: "/img/themes/instagram.webp",
      is_premium: false,
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/instagram.webp",
      theme_category: {
        id: 4,
        name: "Cultural",
        description: null,
        created_at: "2026-01-06T03:45:06.000000Z",
        updated_at: "2026-01-06T03:45:06.000000Z",
      },
    },
    {
      id: 3,
      theme_category_id: 4,
      name: "Javanese",
      slug: "javanese",
      thumbnail: "/img/themes/instagram.webp",
      is_premium: false,
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/instagram.webp",
      theme_category: {
        id: 4,
        name: "Cultural",
        description: null,
        created_at: "2026-01-06T03:45:06.000000Z",
        updated_at: "2026-01-06T03:45:06.000000Z",
      },
    },
    {
      id: 2,
      theme_category_id: 2,
      name: "Windows 11",
      slug: "windows-11",
      thumbnail: "/img/themes/instagram.webp",
      is_premium: true,
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/instagram.webp",
      theme_category: {
        id: 2,
        name: "Modern",
        description: null,
        created_at: "2026-01-06T03:45:06.000000Z",
        updated_at: "2026-01-06T03:45:06.000000Z",
      },
    },
  ]);

  const categories = ref([
    {
      id: 1,
      name: "Basic",
      description: null,
      created_at: "2026-01-06T03:45:06.000000Z",
      updated_at: "2026-01-06T03:45:06.000000Z",
    },
    {
      id: 2,
      name: "Modern",
      description: null,
      created_at: "2026-01-06T03:45:06.000000Z",
      updated_at: "2026-01-06T03:45:06.000000Z",
    },
    {
      id: 3,
      name: "Social",
      description: null,
      created_at: "2026-01-06T03:45:06.000000Z",
      updated_at: "2026-01-06T03:45:06.000000Z",
    },
    {
      id: 4,
      name: "Cultural",
      description: null,
      created_at: "2026-01-06T03:45:06.000000Z",
      updated_at: "2026-01-06T03:45:06.000000Z",
    },
  ]);

  return {
    themes,
    categories,
  };
});
