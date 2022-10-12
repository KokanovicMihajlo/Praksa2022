Feature: Credit Cards P2-50 and P2-51

    As a user I want to see Credit Cards and Credit Card details

    Background: I am loged in to the web app
        Given I am loged in

    Scenario: As a user I want to see a list of Credit Cards
        Then  I should see a list of Credit Card Accounts

    Scenario: As a user I want to see details of one of Credit Cards
        When  I click on a Credit Card Account
        And   I click on Credit Card Account Details
        Then  I should see Credit Card Account Details