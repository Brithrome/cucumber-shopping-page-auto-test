const { When, Then } = require('@wdio/cucumber-framework');
 
const SignInPage = require('../pageobjects/signIn.page');

When('I proceed to the checkout', async () => {
    await SignInPage.proceedToCheckout();
});

Then(/^I create a new account using my (.+)$/, async (email) => {
    await SignInPage.createAccount(email);
});