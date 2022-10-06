Feature: Product details P2-15

    As a user I want to see product details of a Current Account

    Background: I am loged in to the web app
        Given I am loged in
        And   I click on a current account


    Scenario: As a user I want to see transactions
        Then  I shoud see account transactions

    Scenario: As a user I want to see  details
        When  I click on details
        Then  I should see account details
           