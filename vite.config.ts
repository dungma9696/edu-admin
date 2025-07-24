import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    server: {
      port: 3000,
      watch: {
        usePolling: true,
        interval: 150,
      },
    },
    preview: {
      port: parseInt(env.VITE_PREVIEW_PORT || "3001"),
    },
    plugins: [react(), reactRouter(), tsconfigPaths()],
    define: {
      "process.env": process.env,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "app"),
        "@components": path.resolve(__dirname, "app/components"),
        "@assets": path.resolve(__dirname, "app/assets"),
        "@utils": path.resolve(__dirname, "app/utils"),
      },
    },
  });
};
