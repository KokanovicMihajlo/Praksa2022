Feature: Term Deposits P2-37 and P2-38

    As a user I want to see Term Deposits and details of Term Deposits

    Background: I am loged in to the web app
        Given I am loged in

    Scenario: As a user I want to see a list of Term Deposits
        Then  I should see a list of Term Deposits

    Scenario: As a user I want to see  details of one of Term Deposits
        When  I click on a Term Deposit
        And   I click on a Term Deposit Details
        Then  I should see Term Deposit details