import { defineConfig } from "vitest/config";
import { transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      enforce: "pre",

      async transform(code, id) {
        if (!id.endsWith(".js")) {
          return null;
        }

        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },

    react(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.js"],

    exclude: [
      "**/node_modules/**",
      "**/.next/**",
      "**/coverage/**",
      "**/legacy/**",
      "**/prisma-backup/**",
      "**/tests/e2e/**",
      "**/*.spec.js",
    ],

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: [
        "legacy/**",
        "coverage/**",
        "prisma-backup/**",
        "node_modules/**",
        ".next/**",
        "tests/e2e/**",
        "**/*.spec.js",
      ],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
});
