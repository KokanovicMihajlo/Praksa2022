Feature: Saving Accounts P2-27 and P2-28

    As a user I want to see product details of a Saving Account

    Background: I am loged in to the web app
        Given I am loged in

    Scenario: As a user I want to see a list of Saving Accounts
        Then  I should see a list of Savings Accounts

    Scenario: As a user I want to see  details of one of Saving Accounts
        When  I click on a Savings Account
        And   I click on account details
        Then  I should see Saving Account details