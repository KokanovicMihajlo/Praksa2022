import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

Given('I am on the login page', ()=>{
    cy.visit(Cypress.env('loginPage'));
})

Given('I am loged in', ()=>{
    cy.Login2()
})

When('I enter credentials and click Log In', ()=>{
    cy.SimpleLogin()
})

Then('I am redirected to landing page', ()=>{
    cy.get('[data-role=headings]').should('contain', 'My products')
})

When('I want to logout', ()=>{
    cy.Logout()
})

Then('I am redirected to the login page', ()=>{
    cy.get('#kc-page-title').should('contain', Cypress.env('welcomeTextEng'))
})