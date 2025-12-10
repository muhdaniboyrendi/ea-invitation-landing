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
    headers: {
      Accept: "application/json",
    },
    transform: (response) => {
      return response.data;
    },
  });

  const {
    data: categories,
    error: categoryError,
    pending: categoriesPending,
    refresh: categoriesRefresh,
  } = useFetch(`${apiBaseUrl}/categories`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
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
