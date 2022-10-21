import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  When('I click on Manage devices',()=>{
    cy.get('[data-role=user-full-name]').click()
    cy.contains('Manage devices').click()
  })

  Then('I should be able to see Devices list',()=>{
    cy.get('[data-role=devices]').should('contain','Devices')
    cy.get('h2').should('contain','Device information')
    cy.get('[data-role=device-item-icon]').eq(0).should('be.visible')
    cy.get('[data-role=device-item]').eq(0).should('contain','iPhone 13 Pro Max test').and('contain',"Apple 'x86_64'")
    .and('contain','Registered on: 6 Oct 2022, 15:32:15')
    cy.get('[data-role=device-item-icon]').eq(1).should('be.visible')
    cy.get('[data-role=device-item]').eq(1).should('contain',"Test’s iPhone").and('contain',"Apple 'iPhone13,2'")
    .and('contain','Registered on: 7 Oct 2022, 07:35:50')
    cy.get('[data-role=device-item-icon]').eq(2).should('be.visible')
    cy.get('[data-role=device-item]').eq(2).should('contain','IPhone 12').and('contain',"Apple 'iPhone13,4'")
    .and('contain','Registered on: 4 Aug 2022, 14:22:12')
    cy.get('[data-role=device-item-icon]').eq(3).should('be.visible')
    cy.get('[data-role=device-item]').eq(3).should('contain',"Endava’s iPhone").and('contain',"Apple 'iPhone10,5'")
    .and('contain','Registered on: 29 Sept 2022, 07:46:29')
    cy.get('[data-role=device-item-menu]').eq(0).click()
    cy.get('[data-role=dropdown-menu]').should('contain','Edit name').and('contain','Suspend').and('contain','Remove')
  })