import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  When('I click on Manage Products',()=>{
    cy.contains('Manage products').click()
  })

  Then('I should see a list of Products I can edit',()=>{
    cy.get('[data-role=headings]').should('contain','Manage products')
    cy.get('[data-role=product-summary-manage-accounts-initial-message]').should('be.visible')
    .and('contain','Below you can hide or display again your products. Hidden product(s) will not be available for use in DSK Online and DSK Mobile.')
    .and('contain','You can change product name. You can reset the predefined name by deleting the one you have entered.')
    cy.get('[class=row]').eq(0).should('contain','Vasil Current Account').and('contain','BG08STSA93000027831283')
    .and('contain','46 040', ',', '90', 'BGN')
    cy.get('[class=row]').eq(1).should('contain','Vasil Current Account').and('contain','BG23STSA93000005794456')
    .and('contain','209 279', ',', '80', 'BGN')
    cy.get('[class=row]').eq(2).should('contain','Vasil Current Account').and('contain','BG35STSA93000027831282')
    .and('contain','162 407', ',', '65', 'BGN')
    cy.get('[class=bb-switch]').should('be.visible')
    cy.get('[data-role=inline-edit-btn]').should('be.visible')
  })

  When('I click on edit button',()=>{
    cy.get('[data-role=inline-edit-btn]').eq(0).click()
  })

  When('I rename desired account',()=>{
    cy.get('[data-role="inline-edit-input"]').clear().type('Vasil Account')
    cy.get('[data-role=inline-edit-accept]').click()
  })

  When('I navigate back to My products page',()=>{
    cy.contains('Back').click()
    cy.reload()
  })

  Then('I should be able to see changes applied',()=>{
    cy.get('[data-role=card-title]').eq(3).should('contain','Vasil Account')
    cy.get('[data-role=card-sub-title]').should('contain','BG08STSA93000027831283')
  })

  When('I rename Account to original name',()=>{
    cy.get('[data-role=inline-edit-btn]').eq(0).click()
    cy.get('[data-role=input]').clear().type('Vasil Current Account')
    cy.get('[data-role=inline-edit-accept]').click()
    cy.reload()
  })
  
  Then('I should see original Account name',()=>{
    cy.get('[data-role=inline-edit-text]').should('contain','Vasil Current Account')
    cy.get('[data-role=product-number]').should('contain','BG08STSA93000027831283')
  })

  When('I click on visibility switch',()=>{
    cy.get('[class=bb-switch]').eq(0).click()
  })

  Then('I should not be able to se given account',()=>{
    cy.contains('BG08STSA93000027831283').should('not.exist')
  })

  When('I click back on visibility switch',()=>{
    cy.get('[class=bb-switch]').eq(0).click()
    cy.reload()
  })

  Then('I should be able to se given account',()=>{
    cy.get('[data-role=product-number]').should('contain','BG08STSA93000027831283').should('be.visible')
  })