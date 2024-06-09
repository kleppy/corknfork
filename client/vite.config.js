// Import the necessary functions from Vite
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Export the configuration.
export default defineConfig({
  // Define plugins to be used by Vite.
  plugins: [react()],
  //! Chat GPT Recommended.
  build: {
    outDir: "dist",
  },
  // Frontend server configuration to establish what the client sees.
  server: {
    port: 3000,
    open: true,
    // Backend server configuration to handle database API requests.
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
