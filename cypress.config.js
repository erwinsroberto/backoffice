const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8qvomj',
  e2e: {
    baseUrl: "https://backoffice-homo.touch.tec.br/",
    setupNodeEvents(on, config) {
    },
  },
});
