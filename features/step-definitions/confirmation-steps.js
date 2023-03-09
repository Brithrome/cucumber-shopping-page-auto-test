const { When, Then } = require('@wdio/cucumber-framework');
 
const ConfirmationPage = require('../pageobjects/confirmation.page');

When('I click the confirmation order button', async () => {
    ConfirmationPage.confirmationBtn();
});


Then(/^I should see a confirmation message saying (.*)$/, async (message) => {
    ConfirmationPage.confirmationPage(message);
});
