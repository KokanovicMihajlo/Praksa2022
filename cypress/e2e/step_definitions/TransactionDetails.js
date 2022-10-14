import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  When('I click on a given Transaction',()=>{
    cy.get('[class=bb-transaction-item-description__title]').eq(0).should('contain','Debit Memo Post').click()
  })

  Then('I should see Transaction Details',()=>{
    cy.get('[data-role=modal-body]').within(()=>{
      cy.get('[data-role=list-details-amount]').eq(0).should('contain','530',',','00','BGN')
      cy.get('[data-role=list-details-booking-date]').should('contain','09.09.2022')
      cy.get('[data-role=list-details-type-section]').should('contain','Type').and('contain','Payment')
      cy.get('[data-role=list-details-instructed-amount-section]').should('contain','Foreign currency amount')
      .and('contain','530',',','00','BGN')
      cy.get('[data-role=list-details-counter-party-account-number-section]').should('contain','Counterparty IBAN')
      .and('contain','0000000025092389')
      cy.get('[data-role=list-details-description-section]').should('contain','Description').and('contain','DEBIT MEMO POST')
      cy.get('[data-role=list-details-original-description-section]').should('contain','Link reference').and('contain','DEBIT MEMO POST')
    })
  })