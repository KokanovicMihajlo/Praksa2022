import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"

When('I click on a Savings Account',()=>{
  cy.contains(Cypress.env('SavingAccountIBAN')).click()
})
When('I click on account details',()=>{
  cy.contains('Details').should('contain','Details').click()
})

Then('I should see a list of Savings Accounts', ()=>{
  cy.get('[class="bb-product-kind card card-body"]').eq(1).within(()=>{
  cy.contains('Savings Accounts').should('contain','Savings Accounts')
  cy.contains('Total').should('contain','Total')
  cy.get('[data-role=current-account-total-amount]').should('contain','535 469', ',', '48', 'BGN')
  cy.get('[data-role=card-title]').eq(1).should('contain','Saving Account')
  cy.get('[data-role=card-sub-title]').should('contain','BG24STSA93000027831286')
  cy.get('[data-role=bb-amount-value__amount]').eq(2).should('contain','270 473', ',', '47', 'BGN')
  cy.get('[data-role=card-title]').eq(2).should('contain','Saving Account')
  cy.get('[data-role=card-sub-title]').should('contain','BG94STSA93000027831287')
  cy.get('[data-role=bb-amount-value__amount]').eq(3).should('contain','124 185', ',', '47', 'BGN')
  })
 })

Then('I should see Saving Account details',()=>{
  cy.get('.bb-stack__item--fill').should('contain','Vasil Saving Account')

  cy.get('.card-header').should('contain','General')

  cy.get('[class=row]').should('contain','Account number').and('contain','Available')
  cy.get('[data-role=current-account-iban]').contains(Cypress.env('SavingAccountIBAN'))
  cy.get('[data-role=current-account-available]').should('contain','124 185', ',', '47', 'BGN')
  cy.get('[class=row]').should('contain','Interest rate').and('contain','Accrued interest')
  cy.get('[data-role=savings-account-accountInterestRate]').should('contain','3,30 %')
  cy.get('[data-role=savings-account-accruedInterest]').should('contain','100', ',', '20', 'BGN')
})