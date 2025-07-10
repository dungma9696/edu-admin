export interface ConfigModel {
  BASE_URL: string | undefined;
  BASE_URL_VERSION: string | undefined;
}

export const CONFIG: ConfigModel = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  BASE_URL_VERSION: import.meta.env.VITE_API_BASE_URL_VERSION,
};
