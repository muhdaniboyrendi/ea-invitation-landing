export const useThemeStore = defineStore("theme", () => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBaseUrl;

  const {
    data: themes,
    error: themesError,
    pending: themesPending,
    refresh: themesRefresh,
  } = useFetch(`${apiBaseUrl}/themes`, {
    method: "GET",
    key: "landing-themes-data",
    transform: (response) => {
      return response.data;
    },
  });

  // const {
  //   data: categories,
  //   error: categoryError,
  //   pending: categoriesPending,
  //   refresh: categoriesRefresh,
  // } = useFetch(`${apiBaseUrl}/theme-categories`, {
  //   method: "GET",
  //   key: "landing-theme-categories-data",
  //   transform: (response) => {
  //     return response.data;
  //   },
  // });

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
  ]);

  return {
    themes,
    themesError,
    themesPending,
    themesRefresh,
    categories,
    // categoryError,
    // categoriesPending,
    // categoriesRefresh,
  };
});
