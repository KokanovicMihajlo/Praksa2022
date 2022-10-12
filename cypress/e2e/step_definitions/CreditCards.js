import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  Then('I should see a list of Credit Card Accounts',()=>{
    cy.get('[class="bb-product-kind card card-body"]').eq(4).within(()=>{
    cy.get('[data-role="Credit Card Accounts"]').should('contain','Credit Card Accounts')
    cy.get('[data-role=current-account-total-amount]').should('contain','1 234', ',', '23', 'BGN')
    cy.get('[data-role=card-title]').should('contain','Credit Card Account')
    cy.get('[data-role=bb-amount-value]').should('contain','1 234', ',', '23', 'BGN')
    cy.get('[data-role=card-sub-title]').should('contain',(Cypress.env('BonevCC')))
    })
  })

  When('I click on a Credit Card Account',()=>{
    cy.get('[data-role=card-sub-title]').contains(Cypress.env('BonevCC')).should('contain',(Cypress.env('BonevCC'))).click()
  })

  When('I click on Credit Card Account Details',()=>{
    cy.contains('Details').should('contain','Details').click()
  })

  Then('I should see Credit Card Account Details',()=>{
    cy.get('.bb-stack__item--fill').should('contain','Vasil Credit Card Account')

    cy.get('[class=card-header]').eq(0).should('contain','General')

    cy.get('[class=row]').eq(0).should('contain','Account number').and('contain','Available')
    .and('contain','Balance').and('contain','Blocked amount')
    cy.get('[data-role=credit-card-account-iban]').should('contain',(Cypress.env('BonevCC')))
    cy.get('[data-role=credit-card-account-availableBalance]').should('contain','1 234', ',', '23', 'BGN')
    cy.get('[data-role=credit-card-account-bookedBalance]').should('contain','2 452', ',', '23', 'BGN')
    cy.get('[data-role=credit-card-account-blockedAmount]').should('contain','112', ',', '45', 'BGN')

    cy.get('[class=card-header]').eq(1).should('contain','Credit limit details')

    cy.get('[class=row]').eq(1).should('contain','Credit limit').and('contain','Used limit')
    cy.get('[data-role=credit-card-account-limit]').should('contain','505', ',', '50', 'BGN')
    cy.get('[data-role=credit-card-account-used-limit]').should('contain','100', ',', '30', 'BGN')
  })