const MainPage = require('./main.page');

class ConfirmationPage extends MainPage {

get confirmOrderBtn () {
    return $('.alert alert-success');
}

get confirmationText () {
    return $('.button btn btn-default button-medium');
}

async confirmationBtn(){
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

module.exports = new ConfirmationPage();