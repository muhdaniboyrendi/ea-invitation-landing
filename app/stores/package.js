export const usePackageStore = defineStore("package", () => {
  const config = useRuntimeConfig();
  const apiBaseUrlPublic = config.public.apiBaseUrlPublic;

  const {
    data: packages,
    error,
    pending,
    refresh,
  } = useFetch(`${apiBaseUrlPublic}/packages`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    transform: (response) => {
      return response.data;
    },
  });

  return {
    packages,
    error,
    pending,
    refresh,
  };
});
