import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"
  
When('I am on My Products page',()=>{
  cy.get('[data-role=headings]').should('contain', 'My products')
})

Then('I shoud see Current Accounts List',()=>{
  cy.get('[class="bb-product-kind card card-body"]').eq(0).within(()=>{
  cy.get('[data-role="Current Accounts"]').should('contain','Current Accounts')
  cy.get('[class=bb-product-kind__balance]').should('contain','Total')
  cy.get('[data-role=current-account-total-amount]').should('contain','8 145', ',', '91', 'BGN')
  cy.get('[data-role=card-title]').eq(0).should('contain','Current Account')
  cy.get('[data-role=card-sub-title]').should('contain',(Cypress.env('IBANBonev')))
  cy.get('[data-role=bb-amount-value]').eq(1).should('contain','1 234', ',', '23', 'BGN')
})
})