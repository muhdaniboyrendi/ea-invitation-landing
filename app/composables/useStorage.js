export const useStorage = () => {
  const config = useRuntimeConfig();

  const getStorageUrl = (path) => {
    if (!path) return "";

    // Remove leading slash if exists
    path = path.replace(/^\//, "");

    return `${config.public.apiBaseUrl}/storage/${path}`;
  };

  const getPrivateStorageUrl = (path) => {
    if (!path) return "";

    path = path.replace(/^\//, "");

    return `${config.public.apiBaseUrl}/storage/private/${path}`;
  };

  return {
    getStorageUrl,
    getPrivateStorageUrl,
  };
};
