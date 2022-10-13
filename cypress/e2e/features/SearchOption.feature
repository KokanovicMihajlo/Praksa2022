Feature: Search Option P2-67

    As a user I want to see Search options and check it's functionality

    Background: I am loged in to the web app
        Given I am loged in
        And   I shoud see Current Accounts List
        And   I click on a current account

    Scenario: As a user I want to see Search option
        Then  I should see Search option

    Scenario: As a user I want to enter Search parameters and see the results
        When  I enter text in Search field
        And   I click Search
        Then  I should see Search results
        And   I click on clear Search
        Then  I should see all transactions