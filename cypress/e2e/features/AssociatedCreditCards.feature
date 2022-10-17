Feature: Associated Credit Cards P2-88

    As a user I want to see Credit Cards associated to given account

    Background: I am loged in to the web app
        Given I am loged with a user that has associated Credit Cards
        And   I click on given account

    Scenario: As a user I want to see Credit Cards associated to given account
        When  I click on account details
        Then  I should see associated Credit Cards