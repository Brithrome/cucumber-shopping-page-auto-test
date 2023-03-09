Feature: Shopping as a anon user

  Scenario Outline: As a anon user I add the products to my cart

    Given I am on the shopping page
    When I enter to the women section
      And I type "Printed Summer Dress" into the searchbar
    When I click one of the search results
      And I select the desire color
      Then I add the product to the cart
    
  Examples:
  |keyword             |
  |Printed Summer Dress|

  Scenario Outline: As a anon user I create a new account using my email

    When I proceed to the checkout
    Then I create a new account using my <email>

    Examples:
          | email                         |                
          | brithanyomero@blankfactor.com |