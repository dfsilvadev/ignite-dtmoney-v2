import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "w1rrk2",
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://127.0.0.1:5173/",
    viewportWidth: 1920,
    viewportHeight: 980
  }
});
