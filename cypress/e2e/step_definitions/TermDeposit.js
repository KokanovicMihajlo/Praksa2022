import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  Then('I should see a list of Term Deposits',()=>{
    cy.get('[data-role="Term Deposits"]').should('contain','Term Deposits')
    cy.get('[data-role=current-account-total-amount]').should('contain','4 904', ',', '46', 'BGN')
    cy.get('[data-role=card-title]').should('contain','Term Deposit')
    cy.get('[data-role=bb-amount-value]').should('contain','2 452', ',', '23', 'BGN')
  })

  When('I click on a Term Deposit',()=>{
    cy.get('[data-role=card-title]').contains('Term Deposit').should('contain','Term Deposit').click()
  })

  When('I click on a Term Deposit Details',()=>{
    cy.contains('Details').should('contain','Details').click()
  })

  Then('I should see Term Deposit details', ()=>{
    cy.get('.bb-stack__item--fill').should('contain','Vasil Term Deposit')

    cy.get('.card-header').eq(0).should('contain','General')

    cy.get('[class=row]').eq(0).should('contain','Account number').and('contain','Available')
    .and('contain','Opening date').and('contain','Maturity date')
    .and('contain','Deposit current account').and('contain','Current account for the transfer of interest')
    cy.get('[data-role=deposit-account-number]').should('contain','060000000027831288')
    cy.get('[data-role=deposit-availableBalance]').should('contain','2 452', ',', '23', 'BGN')
    cy.get('[data-role=deposit-start-date]').should('contain','03.08.2022')
    cy.get('[data-role=deposit-maturity-date]').should('contain','03.08.2023')
    cy.get('[data-role=deposit-depositCurrentAccount]').should('contain','BG23STSA93000005794456')
    cy.get('[data-role=deposit-depositCurrentAccountTransferOfInterest]').should('contain','BG23STSA93000005794456')

    cy.get('.card-header').eq(1).should('contain','Interest details')

    cy.get('[class=row]').eq(1).should('contain','Interest rate').and('contain','Accrued interest')
    .and('contain','Before schedule closure interest')
    cy.get('[data-role=deposit-applicableInterestRate]').should('contain','0',',','60','%')
    cy.get('[data-role=deposit-accruedInterest]').should('contain','1 550', ',', '47', 'BGN')
    cy.get('[data-role=deposit-beforeScheduleClosureInterest]').should('contain','0',',','01','%')
  })