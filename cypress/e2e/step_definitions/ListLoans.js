import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  Then('I should see a list of Loans',()=>{
    cy.get('[data-role=Loans]').should('contain','Loans')
    cy.get('[data-role=current-account-total-amount]').should('contain','2 798', ',', '37', 'BGN')
    cy.get('[data-role=card-title]').should('contain','Personal loan')
    cy.get('[data-role=card-sub-title]').should('contain','110000000025092389')
    cy.get('[data-role=bb-amount-value]').should('contain','932', ',', '79', 'BGN')
    cy.get('[data-role=card-sub-title]').should('contain','110000000025092403')
    cy.get('[data-role=bb-amount-value]').should('contain','932', ',', '79', 'BGN')
    cy.get('[data-role=card-title]').should('contain','Mortgage Loan')
    cy.get('[data-role=card-sub-title]').should('contain','170000000026424417')
  })

  When('I click on a Loan',()=>{
    cy.get('[data-role=card-sub-title]').contains('110000000025092389').should('contain','110000000025092389').click()
  })

  When('I click on Loan Details',()=>{
    cy.contains('Details').should('contain','Details').click()
  })

  Then('I should see Loan details', ()=>{
    cy.get('.bb-stack__item--fill').should('contain','Vasil Personal loan')

    cy.get('[class=card-header]').eq(0).should('contain','General')

    cy.get('[class=row]').eq(0).should('contain','Account number').and('contain','Account holder')
    .and('contain','Loan amount').and('contain','Contract date').and('contain','Maturity date').and('contain','Currency')
    cy.get('[data-role=loan-details-account-number]').should('contain','110000000025092389')
    cy.get('[data-role=loan-details-account-holder]').should('contain','Vasil Todorov Bonev')
    cy.get('[data-role=loan-details-loan-amount]').should('contain','2 452', ',', '23', 'BGN')
    cy.get('[data-role=loan-details-contract-date]').should('contain','24.05.2022')
    cy.get('[data-role=loan-details-maturity-date]').should('contain','24.05.2025')
    cy.get('[data-role=loan-details-currency]').should('contain','BGN')

    cy.get('[class=card-header]').eq(1).should('contain','Loan details')

    cy.get('[class=row]').eq(1).should('contain','Remaining loan amount (principal)').and('contain','Monthly instalment')
    .and('contain','Last instalment date').and('contain','Next instalment date').and('contain','Accrued interest')
    .and('contain','Interest rate').and('contain','Instalment remaining').and('contain','Payoff amount (interest and principal)')
    .and('contain','Instalments paid').and('contain','Unadvanced amount').and('contain','Effective interest rate date')
    .and('contain','Interest with deferred payment under additional agreements')
    cy.get('[data-role=loan-details-remaining-loan-amount]').should('contain','500', ',', '50', 'BGN')
    cy.get('[data-role=loan-details-monthly-instalment]').should('contain','26', ',', '00', 'BGN')
    cy.get('[data-role=loan-details-last-instalment-date]').should('contain','24.08.2022')
    cy.get('[data-role=loan-details-next-instalment-date]').should('contain','24.09.2022')
    cy.get('[data-role=loan-details-accrued-interest]').should('contain','124', ',', '58', 'BGN')
    cy.get('[data-role=loan-details-interest-rate]').should('contain','0,58 %')
    cy.get('[data-role=loan-details-instalment-remaining]').should('contain','0')
    cy.get('[data-role=loan-details-payoff-amount]').should('contain','936',',','00','BGN')
    cy.get('[data-role=loan-details-instalments-paid]').should('contain','26')
    cy.get('[data-role=loan-details-unadvanced-amount]').should('contain','0', ',', '00', 'BGN')
    cy.get('[data-role=loan-details-effective-interest-rate-date]').should('contain','24.05.2022')
    cy.get('[data-role=loan-details-interest-with-deferred-payment]').should('contain','178', ',', '36', 'BGN')

    cy.get('[class=card-header]').eq(2).should('contain','Late payments and penalty interests')

    cy.get('[class=row]').eq(2).should('contain','Past due amount (interest and principal)').and('contain','Delayed due principal payment')
    .and('contain','Penalty interest').and('contain','Late fees').and('contain','Payments past due').and('contain','Number of days overdue')
    cy.get('[data-role=loan-details-past-due-amount]').should('contain','0', ',', '00', 'BGN')
    cy.get('[data-role=loan-details-delayed-due-principal-amount]').should('contain','125', ',', '00', 'BGN')
    cy.get('[data-role=loan-details-penalty-interest]').should('contain','1', ',', '50', 'BGN')
    cy.get('[data-role=loan-details-late-fees]').should('contain','50', ',', '50', 'BGN')
    cy.get('[data-role=loan-details-payments-past-due]').should('contain','121')
    cy.get('[data-role=loan-details-number-of-days-overdue]').should('contain','0')

    cy.get('[class=card-header]').eq(3).should('contain','Fees and insurance premiums')

    cy.get('[class=row]').eq(3).should('contain','Annual management fee (unpaid fees due)').and('contain','Annual management fee with deferred payment under additional agreements')
    .and('contain','Unpaid life insurance premium (when part of the monthly installment)').and('contain','Fees and other receivables due under the loan agreement')
    .and('contain','Property insurance expiry date').and('contain','Property insurance Company')
    .and('contain','Life insurance type').and('contain','Life insurance start date').and('contain','Life insurance end date')
    cy.get('[data-role=loan-details-annual-management-fee]').should('contain','0', ',', '00', 'BGN')
    cy.get('[data-role=loan-details-annual-management-fee-deferred-payment]').should('contain','0', ',', '50', 'BGN')
    cy.get('[data-role=loan-details-unpaid-life-insurance-premium]').should('contain','29', ',', '00', 'BGN')
    cy.get('[data-role=loan-details-fees-and-other-receivables-due-under]').should('contain','12', ',', '00', 'BGN')
    cy.get('[data-role=loan-details-property-insurance-expiry-date]').should('contain','24.05.2025')
    cy.get('[data-role=loan-details-property-insurance-company]').should('contain','ABC Insurance Company')
    cy.get('[data-role=loan-details-life-insurance-type]').should('contain','Life insurance')
    cy.get('[data-role=loan-details-life-insurance-start-date]').should('contain','24.05.2022')
    cy.get('[data-role=loan-details-life-insurance-end-date]').should('contain','24.05.2025')
  })