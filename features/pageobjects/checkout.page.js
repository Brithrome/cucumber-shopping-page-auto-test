const MainPage = require('./main.page');

class CheckoutPage extends MainPage {

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

    open () {
        return super.open('index.php');
    }
}

module.exports = new CheckoutPage();