const { Given, When, Then } = require('@wdio/cucumber-framework');
 
const ShoppingPage = require('../pageobjects/shopping.page');
 
Given(/^I am on the (\w+) page$/, async (namePage) => {
    await ShoppingPage.open();
});

When('I enter to the women section', async () => {
    await ShoppingPage.womenSection();
});

When(/^I type (.+) into the searchbar$/, async (keyword) => {
    await ShoppingPage.searchClothes(keyword);
});

When('I click one of the search results', async () => {
    await ShoppingPage.product();
});

When('I select the desire color', async () => {
    await ShoppingPage.selectColor();
});

Then('I add the product to the cart', async () => {
    await ShoppingPage.AddToCartBtn();
});
