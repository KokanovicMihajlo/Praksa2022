import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  Then('I should see Search option',()=>{
    cy.get('[class=input-group]').should('contain','Search')
  })

  When('I enter text in Search field',()=>{
    cy.get('[type=search]').type('Maint Fee Uncollected')
  })

  When('I click Search',()=>{
    cy.get('[data-role=bb-search-button]').click()
  })

  Then('I should see Search results',()=>{
    cy.get('[class="bb-card__header bb-subtitle"]').should('contain','2 results').and('contain','found')
    cy.get('.bb-subheader').should('contain','Pending')
    cy.get('[class=bb-transaction-item-description__title]').eq(0).should('contain','Maint Fee Uncollected')
    cy.get('[data-role=bb-amount-value]').eq(1).should('contain','272', ',', '00', 'BGN')
    cy.get('[class=bb-transaction-item-description__subtitle]').eq(0).should('contain','Pending')
    cy.get('[class=bb-transaction-item-description__title]').eq(1).should('contain','Maint Fee Uncollected')
    cy.get('[data-role=bb-amount-value]').eq(2).should('contain','252', ',', '00', 'BGN')
    cy.get('[class=bb-transaction-item-description__subtitle]').eq(1).should('contain','Pending')
    cy.get('[data-role=load-more]').should('contain','All transactions have been loaded')
  })

  When('I click on clear Search',()=>{
    cy.get('[class="bb-icon bb-icon-cancel bb-icon--sm"]').click()
  })

  Then('I should see all transactions',()=>{
    cy.get('[class=bb-transaction-item-description__title]').eq(0).should('contain','Maint Fee Uncollected')
    cy.get('[class=bb-transaction-item-description__subtitle]').eq(0).should('contain','Pending')
    cy.get('[data-role=bb-amount-value]').eq(1).should('contain','272', ',', '00', 'BGN')
    cy.get('[class=bb-transaction-item-description__title]').eq(1).should('contain','Debit Memo Post')
    cy.get('[class=bb-transaction-item-description__subtitle]').eq(1).should('contain','Pending')
    cy.get('[data-role=bb-amount-value]').eq(2).should('contain','524', ',', '00', 'BGN')
  })