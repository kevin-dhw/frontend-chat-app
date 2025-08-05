import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8088',
        changeOrigin: true
      }
    }
  },
  // 配置scss
  css: {
    preprocessorOptions: {
      scss: {
        // 这里需要改，引入自己想要的
        // additionalData: `$injectedColor: orange;`,
        // additionalData: '@import "./src/styles/sassConfig.scss";',
      },
    },
  },
});
