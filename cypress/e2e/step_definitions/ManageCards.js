import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  Given('I am loged with appropriate user',()=>{
    cy.Login4()
  })

  When('I click on Cards option',()=>{
    cy.get('[routerlink="/manage-cards"]').should('contain','Cards').click()
  })

  Then('I should be able to see available Cards',()=>{
    cy.get('h1').should('contain','Cards')
    cy.get('h2').eq(0).should('contain','Debit Cards')

    cy.get('[class="bb-payment-card bb-payment-card-type-visa-debit"]').eq(0).within(()=>{
      cy.get('[class=bb-payment-card__logo]').should('be.visible')
      cy.get('[class=bb-payment-card__vendor]').should('be.visible')
      cy.get('[class=bb-payment-card__number]').should('contain','474836******3452')
      cy.get('[class=bb-payment-card__name]').should('contain','KRISTINA SOKOLOVA')
      cy.get('[class=bb-payment-card__expiration-date-label]').should('contain','VALID THRU')
      cy.get('[class=bb-payment-card__expiration-date-date]').should('contain','05/27')
    })
    cy.get('[class="bb-payment-card bb-payment-card-type-visa-debit"]').eq(1).within(()=>{
      cy.get('[role="img"]').should('be.visible')
    })

    cy.get('h2').eq(1).should('contain','Credit Cards')

    cy.get('[class="bb-payment-card bb-payment-card-type-visa-credit"]').eq(0).within(()=>{
      cy.get('[class=bb-payment-card__logo]').should('be.visible')
      cy.get('[class=bb-payment-card__vendor]').should('be.visible')
      cy.get('[class=bb-payment-card__number]').should('contain','474835******0973')
      cy.get('[class=bb-payment-card__name]').should('contain','KRISTINA SOKOLOVA')
      cy.get('[class=bb-payment-card__expiration-date-label]').should('contain','VALID THRU')
      cy.get('[class=bb-payment-card__expiration-date-date]').should('contain','01/24')
    })

    cy.get('h2').eq(2).should('contain','Virtual Cards')

    cy.get('[class="bb-payment-card bb-payment-card-type-virtual-mastercard"]').eq(0).within(()=>{
      cy.get('[class=bb-payment-card__logo]').should('be.visible')
      cy.get('[class=bb-payment-card__vendor]').should('be.visible')
      cy.get('[class=bb-payment-card__number]').should('contain','554723******4702')
      cy.get('[class=bb-payment-card__name]').should('contain','KRISTINA SOKOLOVA')
      cy.get('[class=bb-payment-card__expiration-date-label]').should('contain','VALID THRU')
      cy.get('[class=bb-payment-card__expiration-date-date]').should('contain','02/23')
  })
})

When('I click on given Card',()=>{
  cy.get('[class="bb-payment-card bb-payment-card-type-visa-debit"]').eq(0).click()
})

Then('I should see Card Details',()=>{
  cy.get('h1').should('contain','Manage card')
  cy.get('h2').eq(0).should('contain','KRISTINA SOKOLOVA','debit','card')
  cy.get('h2').eq(1).should('contain','Block/Unblock')
  cy.get('h5').eq(0).should('contain','Block')
  cy.get('[class="bb-text-support text-small"]').eq(0).should('contain','When blocked, your bank card is restricted to use. You may activate it from here or in DSK Bank office.')
  
  cy.get('h2').eq(2).should('contain','Limits')
  cy.get('[class=row]').eq(1).should('contain','24-hour limit for cash withdrawal')
  .and('contain','Set the amount you can withdraw in cash (from ATM, etc.)').and('contain','1 000','BGN').and('contain','Max:','5 000','BGN')
  cy.get('[data-role=inline-edit-btn]').should('be.visible')
  cy.get('[class=row]').eq(2).should('contain','24-hour limit for POS payment')
  .and('contain','Set the amount you can pay on POS (e.g. supermarkets, restaurants, online, etc.)').and('contain','4 000','BGN')
  .and('contain','Max:','2 550','BGN')
  cy.get('[class=row]').eq(3).should('contain','24-hour total limit')
  .and('contain','Set the total amount you can withdraw and/or pay with your card').and('contain','9 000','BGN')
  .and('contain','Max:','10 000','BGN')
})

When('I edit Card details',()=>{
  cy.get('[class="bb-payment-card bb-payment-card-type-visa-debit"]').eq(0).click()
  cy.get('[data-role=inline-edit-btn]').eq(0).click()
  cy.get('[data-role=inline-edit-input]').clear().type('2000')
  cy.get('[data-role=inline-edit-accept]').click()
  cy.wait(500)
  cy.get('[data-role=inline-edit-btn]').eq(1).click()
  cy.get('[data-role=inline-edit-input]').clear().type('2550')
  cy.get('[data-role=inline-edit-accept]').click()
  cy.wait(500)
  cy.get('[data-role=inline-edit-btn]').eq(2).click()
  cy.get('[data-role=inline-edit-input]').clear().type('10000')
  cy.get('[data-role=inline-edit-accept]').click()
  cy.wait(500)

  cy.get('[data-role=notification-alert]').within(()=>{
    cy.get('[data-role=notification-heading]').should('contain','Limit changed')
  })
})