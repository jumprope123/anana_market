import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/`
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      port: 9999, // 원하는 포트 번호
    },
    plugins: [react(), tsconfigPaths()],
    define: {
      __VITE_API_URL__: JSON.stringify(env.VITE_API_URL),
      "process.env": process.env,
    },
    build: {
      sourcemap: mode === "development",
      outDir: "dist",
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name].[hash].js",
          chunkFileNames: "assets/[name].[hash].js",
          assetFileNames: "assets/[name].[hash].[ext]",
        },
      },
    },
  };
});
