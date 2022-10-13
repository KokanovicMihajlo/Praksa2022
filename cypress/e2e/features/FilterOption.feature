Feature: Filter Option P2-69

    As a user I want to see Filter options and check it's functionality

    Background: I am loged in to the web app
        Given I am loged in
        And   I click on a current account
        And   I click on a Filter Button

    Scenario: As a user I want to see Filter options 
        Then  I should see Filter options

    Scenario: As a user I want to enter Filter parameters and see the results
        When  I enter desired filter options
        And   I click apply button
        Then  I should see Filter results
        And   I click on clear Filters
        Then  I should see all of the transactions
