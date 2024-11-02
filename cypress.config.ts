import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/tests/*.{js,jsx,ts,tsx}',
    baseUrl: 'https://website.staging.mydaytrip.net/',
  },
});
