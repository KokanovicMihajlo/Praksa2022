# Web FE Automated tests
This project is a template to create tests for the Web platforms using Cypress and Cucumber. The tests assist in verifying the stability of the environments and also help us understand what features are not working as expected


# Install the dependencies
npm install cypress --save-dev

npm install @badeball/cypress-cucumber-preprocessor

npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild

# Install the extension
Cucumber (Gherkin)
 Full Support

Add to VScode user settings:

  "cucumberautocomplete.steps": [
        "cypress/e2e/step_definitions/*.js",
    ],
    "cucumberautocomplete.strictGherkinCompletion": true

# How to run tests

Using command in terminal "npm run qa" will open cypress interface where you can choose which features to run for QA config

Using command in terminal "npm run dev" will open cypress interface where you can choose which features to run for Dev config