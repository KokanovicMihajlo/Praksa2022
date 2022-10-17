import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  Given('I am loged with a user that has associated Credit Cards',()=>{
    cy.Login3()
  })

  When('I click on given account',()=>{
    cy.contains('BG06STSA93000027830931').click()
  })

  Then('I should see associated Credit Cards',()=>{
    cy.get('h3').eq(2).should('contain','Associated cards')
    cy.get('[class=bb-payment-card]').eq(0).within(()=>{
      cy.get('[class=bb-payment-card__number]').should('contain','4748 36** **** 6671')
      cy.get('[class=bb-payment-card__name]').should('contain','KRISTINA HRISTOVA')
      cy.get('[class=bb-payment-card__expiration-date-label]').should('contain','VALID THRU')
      cy.get('[class=bb-payment-card__expiration-date-date]').should('contain','04/24')
      cy.get('bb-card-vendor-ui').should('be.visible')
    })
    cy.get('[class=bb-payment-card]').eq(1).within(()=>{
      cy.get('[class=bb-payment-card__number]').should('contain','5168 49** **** 9841')
      cy.get('[class=bb-payment-card__name]').should('contain','KRISTINA HRISTOVA')
      cy.get('[class=bb-payment-card__expiration-date-label]').should('contain','VALID THRU')
      cy.get('[class=bb-payment-card__expiration-date-date]').should('contain','12/24')
      cy.get('bb-card-vendor-ui').should('be.visible')
    })
  })