import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add fast refresh options to improve development experience
      fastRefresh: true,
      // Only include JSX runtime, not the full React in development
      jsxRuntime: "automatic",
    }),
    tailwindcss(),
  ],
  build: {
    // Enable minification and tree-shaking
    minify: "terser",
    // Reduce build size
    cssCodeSplit: true,
    // Enable source maps for debugging production issues
    sourcemap: false,
    // Configure Terser for best compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunk
          vendor: ["react", "react-dom", "framer-motion"],
          // UI Libraries chunk
          ui: ["lucide-react"],
        },
      },
    },
  },
  // Improve server performance
  server: {
    // Optimize network layer
    hmr: {
      overlay: false,
    },
  },
  // Enable performance measurements
  performance: true,
});
