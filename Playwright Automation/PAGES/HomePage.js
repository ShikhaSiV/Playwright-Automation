exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.productList = "//h4[@class='card-title']/a";
        this.addToCartbtn = "//a[normalize-space()='Add to cart']";
        this.cart = '#cartur';
    }

    async addProductToCart(productName) {

        // Select the product
        await this.page.locator(this.productList)
            .filter({ hasText: productName })
            .click();

        // Handle the JavaScript alert before clicking Add to cart
        this.page.once('dialog', async dialog => {
            console.log('Alert message:', dialog.message());
            await dialog.accept();
        });

        // Click Add to cart
        await this.page.locator(this.addToCartbtn).click();
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
};