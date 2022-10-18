Feature: Manage Products P2-94

    As a user I want to Manage Products

    Background: I am loged in to the web app
        Given I am loged in
        And   I click on Manage Products

    Scenario: As a user I want to be able to see all the Products I can Manage
        Then  I should see a list of Products I can edit

    Scenario: As a user I want to edit Product details
        When  I click on edit button
        And   I rename desired account
        And   I navigate back to My products page
        Then  I should be able to see changes applied
        When  I click on Manage Products
        And   I rename Account to original name
        And   I reload page
        Then  I should see original Account name

    Scenario: As a user I want to change account visibility
        When  I click on visibility switch
        And   I navigate back to My products page
        Then  I should not be able to se given account
        When  I click on Manage Products
        And   I click back on visibility switch
        And   I reload page
        Then  I should be able to se given account