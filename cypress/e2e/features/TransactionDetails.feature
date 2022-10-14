Feature: Transaction Details P2-78

    As a user I want to see the details of a given Transaction

    Background: I am loged in to the web app
        Given I am loged in
        And   I click on a current account

    Scenario: As a user I want to see Account Transactions
        Then  I shoud see account transactions

    Scenario: As a user I want to see Transaction Details
        When  I click on a given Transaction
        Then  I should see Transaction Details