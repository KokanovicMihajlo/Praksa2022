const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: 'pinane',
  extends: './cypress.env.json',
  env: {
    "loginPage": "/otp-mastercopy-retail-app/redirect",
    "transactionPage":"https://dev.mbank.zelenatabanka.net/otp-mastercopy-retail-app/en/my-accounts/transactions;selectedAccount=4cbb1546-ff9f-4045-8c5b-f446d459b75c/list",
    "usernameField": "Username",
    "fullName": "Stefan Mitov",
    "username": "mitoff11",
    "username2": "bonev7",
    "password": "User_12345678!",
    "legalEntity": "Stefan Mitov",
    "IBAN": "BG85STSA93000019265379",
    "IBAN2": "BG45STSA93000020739529",
    "IBANBonev": "BG23STSA93000005794456",
    "IBANBonev2": "BG51STSA93000027831285",
    "SavingAccountIBAN": "BG94STSA93000027831287",
    "TDIBAN": "BG45STSA93000020739529",
    "LoanAccountNumber": "170000000027403684",
    "TDNumber": "060000000027483233",
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  watchForFileChanges: false,
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
    baseUrl: 'https://dev.mbank.zelenatabanka.net/',
  },
})