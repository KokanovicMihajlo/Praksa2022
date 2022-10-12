Feature: List Loans P2-48 and P2-49

    As a user I want to see Loans and Loan details

    Background: I am loged in to the web app
        Given I am loged in

    Scenario: As a user I want to see a list of Loans
        Then  I should see a list of Loans

    Scenario: As a user I want to see details of one of Loans
        When  I click on a Loan
        And   I click on Loan Details
        Then  I should see Personal Loan details
    
    Scenario: As a user I want to see details of Mortgage Loan
        When  I click on a Mortgage Loan
        And   I click on Mortgage Loan Details
        Then  I should see Mortgage Loan details