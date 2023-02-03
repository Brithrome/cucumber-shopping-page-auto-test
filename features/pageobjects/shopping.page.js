const MainPage = require('./main.page');

class ShoppingPage extends MainPage {

    get womenBtn () {
        return $('.sf-with-ul');
    } 

    get searchField () {
        return $('#searchbox');
    } 

    get searchBtn () {
        return $('input[type="submit"]');
    }

    get productList () {
        return $('#product_list a.product_img_link');
    }

    get productColor () {
        return $('#color_11');
    }

    get cartBtn () {
        return $('input[type="submit"]');
    }

    get checkoutBtn () {
        return $('.btn btn-default button button-medium');
    }

    get secondCheckoutBtn () {
        return $('.button btn btn-default standard-checkout button-medium');
    }

    get emailField () {
        return $('input[type="email"]');
    }

    get accountBtn () {
        return $('.btn btn-default button button-medium exclusive');
    }

    get genderRatioBtn () {
        return $('#id_gender2');
    }

    get customerNameField () {
        return $('#customer_firstname');
    }

    get customerLastNameField () {
        return $('#customer_lastname');
    }

    get passwordField () {
        return $('#passwd');
    }

    get passwordField () {
        return $('#passwd');
    }

    get dayOfBirth () {
        return $('#days');
    }

    get monthOfBirth () {
        return $('#months');
    }

    get yearOfBirth () {
        return $('#years');
    }

    get customerCompany () {
        return $('#company');
    }

    get customerAddress () {
        return $('#address1');
    }

    get customerCity () {
        return $('#city');
    }

    get customerState () {
        return $('#id_state');
    }

    get customerPostalCode () {
        return $('#postcode');
    }

    get customerPhone () {
        return $('#phone');
    }

    get customerAddressAlias () {
        return $('#alias');
    }

    get saveAddressBtn () {
        return $('input[type="submit"]');
    }

    get proceedBtn () {
        return $('input[type="submit"]');
    }

    get termsBtn () {
        return $('#cgv');
    }

    get payWithCardBtn () {
        return $('.bankwire');
    }

    get confirmOrderBtn () {
        return $('.alert alert-success');
    }

    get confirmationText () {
        return $('.button btn btn-default button-medium');
    }

    async womenSection(){
        await this.womenBtn.click();  
    }
    
    async searchClothes(keyword){
        await this.searchField.waitForDisplayed(5000);
        await this.searchField.click();
        await this.searchField.setValue(keyword);
        await this.searchBtn.waitForDisplayed(5000);
        await this.searchBtn.click();    
    }

    async product(){
        await this.productList.waitForDisplayed(5000);
        await this.productList[0].click();  
    }

    async selectColor(){
        await this.productColor.waitForDisplayed(5000);
        await this.productColor.click();
    }

    async AddToCartBtn(){
        await this.cartBtn.click();
    }

    async proceedToCheckout(){
        await this.checkoutBtn.click();
        await this.secondCheckoutBtn.waitForDisplayed(5000);
        await this.secondCheckoutBtn.click();
    }

    async createAccount(email){
        await this.emailField.waitForDisplayed(5000);
        await this.emailField.click();
        await this.emailField.setValue(email);
        await this.accountBtn.click();
    }

    async fillPersonalInfo(firstName, lastName, email, password, day, month, year){
        await this.genderRatioBtn.waitForDisplayed(5000);
        await this.genderRatioBtn.click();
        await this.customerNameField.setValue(firstName);
        await this.customerLastNameField.setValue(lastName);
        await this.passwordField.setValue(password);
        await this.dayOfBirth.setValue(day);
        await this.monthOfBirth.setValue(month);
        await this.yearOfBirth.setValue(year);
    }

    async fillAddress(company, address, city, state, postalCode, homePhone, adressAlias){
        await this.customerCompany.waitForDisplayed(5000);
        await this.customerCompany.setValue(company);
        await this.customerAddress.setValue(address);
        await this.customerCity.setValue(city);
        await this.customerState.setValue(state);
        await this.customerPostalCode.setValue(postalCode);
        await this.customerPhone.setValue(homePhone);
        await this.customerAddressAlias.setValue(adressAlias);
    }

    async saveAddress(){
        await this.saveAddressBtn.click();
    }

    async confirmAddress(){
        await this.proceedBtn.waitForDisplayed(5000);
        await this.proceedBtn.click();
    }

    async termsAndConditions(){
        await this.termsBtn.waitForDisplayed(5000);
        await this.termsBtn.click();
        await this.proceedBtn.click();
    }

    async paymetnMethod(){
        await this.payWithCardBtn.waitForDisplayed(5000);
        await this.payWithCardBtn.click();
    }

    async confirmOrder(){
        await this.confirmOrderBtn.waitForDisplayed(5000);
        await this.confirmOrderBtn.click();
    }

    async confirmationPage(message){
        await this.confirmationText.waitForDisplayed(5000);
        await this.confirmationText.toBeExisting();
        await this.confirmationText.toHaveTextContaining(message);
    }

    open () {
        return super.open('index.php');
    }
}
 
module.exports = new ShoppingPage();
