import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"
  
When('I am on My Products Page',()=>{
  cy.get('[data-role=headings]').should('contain', 'My products')
})

Then('I shoud see necessary properties',()=>{
  cy.get('[data-role="Current Accounts"]').should('contain','Current Accounts')
  cy.get('[class="bb-product-kind__balance-title mr-2"]').should('contain','Total')
  cy.get('[data-role=current-account-total-amount]').should('contain','8 145', ',', '91', 'BGN')
  cy.get('[data-role=card-title]').should('contain','Current Account')
  cy.get('[data-role=card-sub-title]').should('contain','BG23STSA93000005794456')
  cy.get('[data-role=bb-amount-value__amount]').should('contain','1 234', ',', '23', 'BGN')

})