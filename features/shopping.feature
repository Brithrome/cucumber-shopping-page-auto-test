Feature: Shopping as a anon user

  Scenario Outline: As a anon user I create an account and complete one order

    Given I am on the shopping page
    When I enter to the women section
      And I type "Printed Summer Dress" into the searchbar
      Then I click one of the search results
      And I select the desire color
      And I add the product to the cart
      When I proceed to the checkout
      And I create a new account using my <email>
      And I select my gender, add my <firstName>, <lastName>, <password> and my <day> <month> and <year> of birth
      And I add my <company> along with my <address>, <city>, <state>, <postalCode>, my <homePhone> and finally adding my <addressAlias>
      Then I click save
      And I click Proceed to checkout at the address validation screen
      And I accept the terms and conditions
      When I choose my payment method
      And I click the confirmation order button
      Then I should see a confirmation message saying <message>


    Examples:
      | email                          |firstName    |  lastName   |password   |day  |month |year    |company     | address               |city   |state  | postalCode|homePhone  |addressAlias |message                            |
      | brithanyomero@blankfactor.com  |Brithany     |  Romero     |Test123$   |4    |11    |2001    |BlankFactor | 8455 NW 68TH ST DORAL |Doral  |Florida| 33166     |7866152466 |Home         |Your order on My Store is complete.|
