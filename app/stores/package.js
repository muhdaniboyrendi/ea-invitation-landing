export const usePackageStore = defineStore("package", () => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBaseUrl;

  const {
    data: packages,
    error,
    pending,
    refresh,
  } = useFetch(`${apiBaseUrl}/packages`, {
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
