import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  When('I choose Bulgarian language option',()=>{
    cy.get('[class=dropdown-menu-toggle-button__content]').click()
    cy.get('[class=kc-locale-dropdown-menu-subheader]').should('contain','CHOOSE LANGUAGE')
    cy.get('[class="dropdown-item "]').should('contain','Bulgarian').click()
  })

  Then('I should see the page in Bulgarian language',()=>{
    cy.get('[id="kc-page-title"]').should('contain','Добре дошъл в DSK Bank')
  })

  When('I choose English language option',()=>{
    cy.get('[class=dropdown-menu-toggle-button__content]').click()
    cy.get('[class=kc-locale-dropdown-menu-subheader]').should('contain','ИЗБЕРИ ЕЗИК')
    cy.get('[class="dropdown-item "]').should('contain','Английски').click()
  })

  Then('I should see the page in English language',()=>{
    cy.get('[id="kc-page-title"]').should('contain','Welcome to DSK Bank')
  })