Feature: Contacts and Contact details P2-104 and P2-105

    As a user I want to see Contact list and Contact details

    Background: I am loged in to the web app
        Given I am loged with appropriate user
        And   I click on Contacts

    Scenario: As a user I want to be able to see a list of Contacts
        Then  I should be able to see Contacts list

    Scenario: As a user I want to see Contact details
        When  I click on given Contact
        Then  I shoud be able to see Contact Details

    Scenario: As a user I want to add new Contact
        When  I click on New contact button
        And   I enter new contact details
        Then  I shoud see new contact in Contacts list
    
    Scenario: As a user I want to delete Contact
        When  I click on a Contact I want to delete
        And   I click Delete button
        Then  I shoud not be able to see deleted contact