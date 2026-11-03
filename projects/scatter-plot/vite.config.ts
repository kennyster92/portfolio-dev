import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { basename } from "node:path";
import { defineConfig } from "vite";

// Must match `remote.name` in apps/shell/src/projects/registry.ts (snake_case).
const NAME = "scatter_plot";
// Unique per project; the shell's registry points at http://localhost:<PORT>/remoteEntry.js.
const PORT = 5174;

// Production builds are served by the shell at /remotes/<folder name>/ (see docker/).
const ID = basename(import.meta.dirname);

export default defineConfig(({ command }) => ({
  base: command === "build" ? `/remotes/${ID}/` : `http://localhost:${PORT}/`,
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: NAME,
      filename: "remoteEntry.js",
      exposes: { "./App": "./src/App.tsx" },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
  server: { port: PORT, strictPort: true, origin: `http://localhost:${PORT}` },
  preview: { port: PORT, strictPort: true },
  build: { target: "esnext" },
}));
