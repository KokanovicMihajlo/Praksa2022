import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  When('I click on a Filter Button',()=>{
    cy.get('[data-role=filter]').should('contain','Filter').click()
  })

  Then('I should see Filter options',()=>{
    cy.get('[class=row]').eq(0).should('contain','Start Date').and('contain','End Date').and('contain','Incoming/Outgoing')
    cy.get('[class=row]').eq(1).should('contain','Min. amount').and('contain','Max. amount').and('contain','Transaction Type')
    cy.get('[data-role=apply]').should('contain','Apply')
    cy.get('[data-role=cancel]').should('contain','Close')
  })

  When('I enter desired filter options',()=>{
    cy.get('[data-role=toggle-calendar-button]').eq(0).click()
    cy.SelectCalendar('29/08/2022')
    cy.get('[class="input-group bb-input-datepicker"]').eq(1).type('29/10/2022')
    cy.get('[data-role=dropdown]').eq(0).select('Debit')
    cy.get('[data-role=amount-from]').type('0')
    cy.get('[data-role=amount-to]').type('1000')
    cy.get('[data-role=dropdown]').eq(1).select('All')
  })

  When('I click apply button',()=>{
    cy.contains('Apply').click()
  })

  Then('I should see Filter results',()=>{
    cy.get('[class=bb-transaction-list-controls__long-button]').should('contain','Filters applied')
    cy.get('[class="bb-card__header bb-subtitle"]').should('contain','4 results').and('contain','found')
    cy.get('[class="bb-transaction-item-description bb-stack__item"]').eq(0).should('contain','Maint Fee Uncollected')
    cy.get('[data-role=bb-amount-value]').eq(1).should('contain','272', ',', '00', 'BGN')
    cy.get('[class="bb-transaction-item-description bb-stack__item"]').eq(1).should('contain','Debit Memo Post')
    cy.get('[data-role=bb-amount-value]').eq(2).should('contain','524', ',', '00', 'BGN')
    cy.get('[class="bb-transaction-item-description bb-stack__item"]').eq(2).should('contain','Debit Memo Post')
    cy.get('[data-role=bb-amount-value]').eq(3).should('contain','214', ',', '00', 'BGN')
    cy.get('[class="bb-transaction-item-description bb-stack__item"]').eq(3).should('contain','Debit Memo Post')
    cy.get('[data-role=bb-amount-value]').eq(4).should('contain','530', ',', '00', 'BGN')
    cy.get('[data-role=load-more]').should('contain','All transactions have been loaded')
  })

  When('I click on clear Filters',()=>{
    cy.get('[data-role=clear-all]').click()
  })

  Then('I should see all of the transactions',()=>{
    cy.get('[class=bb-transaction-item-description__title]').eq(0).should('contain','Debit Memo Post')
    cy.get('[class=bb-transaction-item-description__subtitle]').eq(0).should('contain','Pending')
    cy.get('[data-role=bb-amount-value]').eq(1).should('contain','530', ',', '00', 'BGN')
    cy.get('[class=bb-transaction-item-description__title]').eq(1).should('contain','Debit Memo Post')
    cy.get('[class=bb-transaction-item-description__subtitle]').eq(1).should('contain','Pending')
    cy.get('[data-role=bb-amount-value]').eq(2).should('contain','214', ',', '00', 'BGN')
  })