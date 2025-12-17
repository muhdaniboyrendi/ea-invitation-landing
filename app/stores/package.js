export const usePackageStore = defineStore("package", () => {
  const {
    data: packages,
    error,
    pending,
    refresh,
  } = useFetch("/api/packages", {
    method: "GET",
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
