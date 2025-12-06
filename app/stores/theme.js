export const useThemeStore = defineStore("theme", () => {
  const config = useRuntimeConfig();
  const apiBaseUrlPublic = config.public.apiBaseUrlPublic;

  const {
    data: themes,
    error: themesError,
    pending: themesPending,
    refresh: themesRefresh,
  } = useFetch(`${apiBaseUrlPublic}/themes`, {
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
  } = useFetch(`${apiBaseUrlPublic}/categories`, {
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
