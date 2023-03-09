const MainPage = require('./main.page');

class ShoppingPage extends MainPage {

    get womenBtn () {
        return $('.sf-with-ul');
    } 

    get searchField () {
        return $('#search_query_top');
    } 

    get searchBtn () {
        return $('[name="submit_search"]');
    }

    get productList () {
        return $('#product_list a.product-name');
    }

    get productColor () {
        return $('#color_11');
    }

    get cartBtn () {
        return $('input[type="submit"]');
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

    open () {
        return super.open('index.php');
    }

}
 
module.exports = new ShoppingPage();
