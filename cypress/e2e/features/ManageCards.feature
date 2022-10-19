Feature: Manage Cards P2-99

    As a user I want to Manage Cards

    Background: I am loged in to the web app
        Given I am loged with appropriate user
        And   I click on Cards option

    Scenario: As a user I want to be able to see all the Cards I can manage
        Then  I should be able to see available Cards

    Scenario: As a user I want to see Card details
        When  I click on given Card
        Then  I should see Card Details

    Scenario: As a user I want to edit Card details
        Then  I edit Card details