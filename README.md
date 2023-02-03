# README

Test name: 

Test case steps:
Enter to the YorLogo clothes store : Faded Short Sleeves T-shirt 
Enter to the women section
Search for an AVAILABLE PRODUCT and click on one of them
Select the available color 
add the product to the cart
proceed to the checkout 
create a new account 
fill out the information requested
fill out the address information
check the shipping terms and conditions
select the payment method
and finally, validate the successful order message



Output example:

```
» /features/shopping.feature
Shopping as a anon user
As a anon user I create an account and complete one order
   ✓ Given I am on the shopping page
   ✓ When I enter to the women section
   ✓ And I type "Printed Summer Dress" into the searchbar
   ✓ Then I click one of the search results
   ✓ And I select the desire color
   ✓ And I add the product to the cart
   ✓ When I proceed to the checkout
   ✓ And I create a new account using my brithanyomero@blankfactor.com
   ✓ And I select my gender, add my Brithany, Romero, Test123$ and my 4 11 and 2001 of birth
   ✓ And I add my BlankFactor along with my 8455 NW 68TH ST DORAL, Doral, Florida, 33166, my 7866152466 and finally adding my Home
   ✓ Then I click save
   ✓ And I click Proceed to checkout at the address validation screen
   ✓ And I accept the terms and conditions
   ✓ When I choose my payment method
   ✓ And I click the confirmation order button
   ✓ Then I should see a confirmation message saying Your order on My Store is complete.
```