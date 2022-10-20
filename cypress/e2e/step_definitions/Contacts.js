import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  When('I click on Contacts',()=>{
    cy.get('[class=bb-layout__horizontal-nav-item-icon]').click()
    cy.get('[routerlink=manage-contacts]').should('contain','Contacts').click()
  })

  Then('I should be able to see Contacts list',()=>{
    cy.get('h1').should('contain','Contacts')
    cy.get('[data-role=search-input]').should('be.visible')
    cy.get('[data-role=new-contact-button]').should('contain','New contact')
    cy.get('[data-role=header-row]').eq(0).should('contain','K')
    cy.get('[data-role=contact-manager-list-item]').eq(0).should('contain','Kai Havertz').and('contain','BG70 STSA 9300 0025 2595 70')
    cy.get('[data-role=header-row]').eq(1).should('contain','N')
    cy.get('[data-role=contact-manager-list-item]').eq(1).should('contain','Nemanja Vidic').and('contain','BG10 prcb 9230 1041 7736 18')
    cy.get('[data-role=contact-manager-list-item]').eq(2).should('contain','Nlk').and('contain','BG26 STSA 9300 0027 8320 39')
    cy.get('[data-role=contact-load-more]').should('contain','Load more')
    cy.contains('Load more').click()
    cy.wait(500)
    cy.get('[data-role=header-row]').eq(3).should('contain','T')
    cy.get('[data-role=contact-manager-list-item]').eq(6).should('contain','tiago Silva').and('contain','BG98 RZBB 9155 1219 8643 91')
  })

  When('I click on given Contact',()=>{
    cy.contains('Kai Havertz').click()
  })

  Then('I shoud be able to see Contact Details',()=>{
    cy.get('[data-role=contact-details-info-name]').should('contain','Kai Havertz')
    cy.get('h5').should('contain','Account number (IBAN)')
    cy.get('[data-role=contact-details-info]').should('contain','BG70STSA93000025259570')
    cy.get('[data-role=contact-edit-button]').should('be.visible')
    cy.get('[data-role=delete-button]').should('be.visible')
  })

  When('I click on New contact button',()=>{
    cy.get('[data-role=new-contact-button]').click()
  })

  When('I enter new contact details',()=>{
    cy.get('h3').should('contain','Create contact')
    cy.get('[data-role=new-contact-name]').should('contain','Contact name')
    cy.get('[data-role=new-contact-iban]').should('contain','Account number (IBAN)')
    cy.get('[data-role=contacts-form-cancel-button]').should('contain','Cancel')
    cy.get('[data-role=save-button]').should('contain','Save')
    cy.get('[data-role=input]').eq(0).type('Petar Petrovic')
    cy.get('[data-role=input]').eq(1).type('BG43RZBB91551262364282')
    cy.contains('Save').click()
    cy.get('[data-role=successfully-saved-contact]').should('contain','Contact created successfully!')
  })

  Then('I shoud see new contact in Contacts list',()=>{
    cy.reload()
    cy.contains('Load more').click()
    cy.wait(500)
    cy.get('[data-role=header-row]').eq(2).should('contain','P')
    cy.get('[data-role=contact-manager-list-item]').eq(4).should('contain','Petar Petrovic').and('contain','BG43 RZBB 9155 1262 3642 82')
  })

  When('I click on a Contact I want to delete',()=>{
    cy.contains('Petar Petrovic').click()
  })

  When('I click Delete button',()=>{
    cy.get('[data-role=delete-button]').click()
    cy.get('[data-role=delete-contact-label]').should('contain','Delete contact?')
    cy.get('[id=contact-confirm-action-dialog-body]').should('contain','By choosing delete, the contact will be permanently deleted.')
    cy.get('[data-role=confirm-action-cancel-btn]').should('contain','Cancel')
    cy.get('[data-role=confirm-delete-button]').should('contain','Delete').click()
    cy.get('[data-role=notification-heading]').should('contain','Contact deleted successfully!')
  })

  Then('I shoud not be able to see deleted contact',()=>{
    cy.contains('Petar Petrovic').should('not.exist')
  })