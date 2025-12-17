export const useThemeStore = defineStore("theme", () => {
  const {
    data: themes,
    error: themesError,
    pending: themesPending,
    refresh: themesRefresh,
  } = useFetch(`/api/themes`, {
    method: "GET",
    transform: (response) => {
      return response.data;
    },
  });

  const {
    data: categories,
    error: categoryError,
    pending: categoriesPending,
    refresh: categoriesRefresh,
  } = useFetch(`/api/theme-categories`, {
    method: "GET",
    transform: (response) => {
      return response.data;
    },
  });

  return {
    themes,
    themesError,
    themesPending,
    themesRefresh,
    categories,
    categoryError,
    categoriesPending,
    categoriesRefresh,
  };
});
