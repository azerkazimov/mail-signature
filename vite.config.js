import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
// import fs from "fs"

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(new URL("./src", import.meta.url).pathname),
      "@components": path.resolve(new URL("./src/components", import.meta.url).pathname),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/sasss/style.scss";
        `,
      },
    },
  },
  // server: {
  //   port: 7163,
  //   https: {
  //     key: fs.readFileSync('localhost-key.pem'),
  //     cert: fs.readFileSync('localhost-cert.pem'),
  //   },
  //   proxy: {
  //     '/api': {
  //       target: 'https://localhost:7163',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
});
