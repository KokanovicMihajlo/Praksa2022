Feature: Manage Devices P2-113

    As a user I want to see the Devices and Manage them

    Background: I am loged in to the web app
        Given I am loged with appropriate user

    Scenario: As a user I want to be able to see a list of Devices i can Manage
        When  I click on Manage devices
        Then  I should be able to see Devices list