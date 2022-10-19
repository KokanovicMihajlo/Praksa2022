Cypress.Commands.add('Login', () => {
    cy.intercept('POST', '**/api/access-control/client-api/v2/accessgroups/usercontext').as('me')
    cy.setCookie("bb-locale", "en")
    cy.visit(Cypress.env('loginPage'));
    cy.contains(Cypress.env('usernameField')).type(Cypress.env('username'))
    cy.contains('Password').type(Cypress.env('password'))
    cy.get('.btn-primary').contains('Login').click()
   // cy.contains(Cypress.env('legalEntity')).click()
})

Cypress.Commands.add('Login2', () => {
    cy.setCookie("bb-locale", "en")
    cy.visit(Cypress.env('loginPage'));
    cy.contains(Cypress.env('usernameField')).type(Cypress.env('username2'))
    cy.contains('Password').type(Cypress.env('password'))
    cy.get('#kc-login').click()
})

Cypress.Commands.add('Login3', () => {
    cy.setCookie("bb-locale", "en")
    cy.visit(Cypress.env('loginPage'));
    cy.contains(Cypress.env('usernameField')).type(Cypress.env('username3'))
    cy.contains('Password').type(Cypress.env('password'))
    cy.get('#kc-login').click()
})

Cypress.Commands.add('Login4', () => {
    cy.setCookie("bb-locale", "en")
    cy.visit(Cypress.env('loginPage'));
    cy.contains(Cypress.env('usernameField')).type(Cypress.env('username4'))
    cy.contains('Password').type(Cypress.env('password'))
    cy.get('#kc-login').click()
})

Cypress.Commands.add('SimpleLogin', () => {
    cy.intercept('POST', '**/api/access-control/client-api/v2/accessgroups/usercontext').as('me')
    cy.contains(Cypress.env('usernameField')).type(Cypress.env('username'))
    cy.contains('Password').type(Cypress.env('password'))
    cy.get('.btn-primary').contains('Login').click()
    //cy.contains(Cypress.env('legalEntity')).click()
})

Cypress.Commands.add('Logout', () => {
    cy.contains(Cypress.env('fullName2')).click({ force: true })
    cy.contains('Log out').click()
})

Cypress.Commands.add('SelectCalendar', (date) => {
    for (let i = 0; i < 100; i++) {
        cy.get('[data-role=start-date]').then(($tmp) => {
            if ($tmp.find('[datetime="' + date + '"]').length > 0) {
                return false
            } else {
                cy.get('[title="Previous month"]').click()
            }
        })
    }
    cy.get('[datetime="' + date + '"]').click()
})