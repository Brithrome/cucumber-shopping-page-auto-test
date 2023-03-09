const MainPage = require('./main.page');

class SignInPage extends MainPage {

    get checkoutBtn () {
        return $('/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/a');
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

    open () {
        return super.open('index.php');
    }
}

module.exports = new SignInPage();