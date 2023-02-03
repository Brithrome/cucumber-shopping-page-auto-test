const { Given, When, Then } = require('@wdio/cucumber-framework');
 
const ShoppingPage = require('../pageobjects/shopping.page');
 
Given(/^I am on the (\w+) page$/, async (namePage) => {
    await ShoppingPage.open();
});

When(/^I enter to the women section$/, async () => {
    ShoppingPage.womenSection();
});

When(/^I type (.+) into the searchbar$/, async (keyword) => {
    ShoppingPage.searchClothes(keyword);
});

Then(/^I click one of the search results$/, async () => {
    ShoppingPage.product();
});

When(/^I select the desire color$/, async () => {
    ShoppingPage.selectColor();
});

When(/^I add the product to the cart$/, async () => {
    ShoppingPage.AddToCartBtn();
});

When(/^I proceed to the checkout$/, async () => {
    ShoppingPage.proceedToCheckout();
});

When(/^I create a new account using my (.+)$/, async (email) => {
    ShoppingPage.createAccount(email);
});

When(/^I select my gender, add my (.+), (.+), (.+) and my (.+) (.+) and (.+) of birth$/, 
async (firstName, lastName, password, dayOfBirth, monthOfBirth, yearOfBirth) => {
    ShoppingPage.fillPersonalInfo(firstName, lastName, password, dayOfBirth, monthOfBirth, yearOfBirth);
});

When(/^I add my (.+) along with my (.+), (.+), (.+), (.+), my (.+) and finally adding my (.+)$/, 
async (company, address, city, state, postalCode, homePhone, adressAlias) => {
    ShoppingPage.fillAddress(company, address, city, state, postalCode, homePhone, adressAlias);
});

Then(/^I click save$/, async () => {
    ShoppingPage.saveAddress();
});

When(/^I click Proceed to checkout at the address validation screen$/, async () => {
    ShoppingPage.confirmAddress();
});

When(/^I accept the terms and conditions$/, async () => {
    ShoppingPage.termsAndConditions();
});

When(/^I choose my payment method$/, async () => {
    ShoppingPage.paymetnMethod();
});

When(/^I click the confirmation order button$/, async () => {
    ShoppingPage.confirmOrder();
});


Then(/^I should see a confirmation message saying (.*)$/, async (message) => {
    ShoppingPage.confirmationPage(message);
});

