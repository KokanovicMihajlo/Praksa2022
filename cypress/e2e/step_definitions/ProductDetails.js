import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  Given('I am on current account page',()=>{
    cy.visit(Cypress.env('transactionPage'));
  })

  And('I click on a current account',()=>{
    cy.contains('BG23STSA93000005794456').click()
  })

  Then('I shoud see account transactions',()=>{
    cy.get('[data-role=product-number]').contains(Cypress.env('IBANBonev'))
    cy.get('[data-role=bb-amount-value__amount]').should('contain','1 234', ',', '23', 'BGN')
    cy.get('[class="bb-subheader"]').should('contain','Pending')
  })

  When('I click on details',()=>{
    cy.get('[class=nav-link]').should('contain','Details').click()
  })

  Then('I should see account details',()=>{
    cy.get('.bb-stack__item--fill').should('contain','Vasil Current Account')

    cy.get('.card-header').should('contain','General').eq(0)
    cy.get('[class=row]').should('contain','Account number').and('contain','Available').eq(0)
    cy.get('[data-role=current-account-iban]').contains(Cypress.env('IBANBonev'))
    cy.get('[data-role=current-account-availableBalance]').should('contain','1 234', ',', '23', 'BGN')
    cy.get('[class=row]').should('contain','Balance').and('contain','Blocked amount')
    cy.get('[data-role=current-account-bookedBalance]').should('contain','2 452', ',', '23', 'BGN')
    cy.get('[data-role=current-account-blockedAmount]').should('contain','112', ',', '45', 'BGN')

    cy.get('.card-header').should('contain','Overdraft details').eq(1)
    cy.get('[class=row]').should('contain','Overdraft limit').and('contain','Used overdraft').eq(1)
    cy.get('[data-role=current-account-overdraftLimit]').should('contain','505', ',', '50', 'BGN')
    cy.get('[data-role=bb-amount-value]').should('contain','100', ',', '30', 'BGN')
  })