const { Given, When, Then } = require('@wdio/cucumber-framework');
 
const CheckoutPage = require('../pageobjects/checkout.page');

Given(/^I select my gender, add my (.+), (.+), (.+) and my (.+) (.+) and (.+) of birth$/, 
async (firstName, lastName, password, dayOfBirth, monthOfBirth, yearOfBirth) => {
    CheckoutPage.fillPersonalInfo(firstName, lastName, password, dayOfBirth, monthOfBirth, yearOfBirth);
});

When(/^I add my (.+) along with my (.+), (.+), (.+), (.+), my (.+) and finally adding my (.+)$/, 
async (company, address, city, state, postalCode, homePhone, adressAlias) => {
    CheckoutPage.fillAddress(company, address, city, state, postalCode, homePhone, adressAlias);
});

When('I click save', async () => {
    CheckoutPage.saveAddress();
});

When('I click Proceed to checkout at the address validation screen', async () => {
    CheckoutPage.confirmAddress();
});

When('I accept the terms and conditions', async () => {
    CheckoutPage.termsAndConditions();
});

Then('I choose my payment method', async () => {
    CheckoutPage.paymetnMethod();
});