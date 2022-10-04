Feature: Login and Logout BBP-640

    As a user I want to login and logout of the application

    Scenario: As a user I login to the application
        Given I am on the login page
        When  I enter credentials and click Log In
        Then  I am redirected to landing page

    Scenario: As a user I logout of the application
        Given I am loged in
        When  I want to logout
        Then  I am redirected to the login page