import { defineConfig } from "wxt";

export default defineConfig({
  manifest: {
    name: "CSES Helper",
    description: "Get hints and topic tags directly on CSES problems",
    version: "1.0.0",

    action: {
      default_title: "CSES Helper",
    },

    // icons: {
    //   "16": "icons/icon16.jpeg",
    //   // "48": "icons/icon48.jpeg",
    //   // "128": "icons/icon128.jpeg",
    // },

    permissions: ["storage"],
    host_permissions: [
      "http://localhost:3000/*",
      "https://your-backend.vercel.app/*",
      "https://cses.fi/*"],
  },
});

