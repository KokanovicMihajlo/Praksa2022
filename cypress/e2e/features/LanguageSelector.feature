Feature: Language Selector P2-77

    As a user I want to see Language selection option on login page

    Scenario: I am on Login page and i want to change the language
        Given I am on the login page
        When  I choose Bulgarian language option
        Then  I should see the page in Bulgarian language
        And   I choose English language option
        Then  I should see the page in English language
