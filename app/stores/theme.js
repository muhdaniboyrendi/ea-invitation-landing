export const useThemeStore = defineStore("theme", () => {
  const themes = ref([
    {
      id: 1,
      name: "Instagram",
      slug: "instagram",
      thumbnail: "/img/themes/instagram.webp",
      category: "premium",
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/instagram.webp",
    },
    {
      id: 2,
      name: "Japanese",
      slug: "japanese",
      thumbnail: "/img/themes/japanese.webp",
      category: "basic",
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/instagram.webp",
    },
    {
      id: 3,
      name: "Javanese",
      slug: "javanese",
      thumbnail: "/img/themes/javanese.webp",
      category: "basic",
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/instagram.webp",
    },
    {
      id: 4,
      name: "Windows 11",
      slug: "windows-11",
      thumbnail: "/img/themes/windows-11.webp",
      category: "premium",
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/instagram.webp",
    },
    {
      id: 5,
      name: "Newspaper",
      slug: "newspaper",
      thumbnail: "/img/themes/newspaper.webp",
      category: "basic",
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/newspaper.webp",
    },
    {
      id: 6,
      name: "Neubrutalism",
      slug: "neubrutalism",
      thumbnail: "/img/themes/neubrutalism.webp",
      category: "premium",
      created_at: "2026-01-12T08:03:33.000000Z",
      updated_at: "2026-01-12T08:03:33.000000Z",
      thumbnail_url: "/img/themes/neubrutalism.webp",
    },
  ]);

  return {
    themes,
  };
});
