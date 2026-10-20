exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.noOfProduct = "//div[@class='col-lg-8']";
    }

    async checkProductInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProduct);

        for (const product of productsInCart) {
            console.log(await product.textContent());

            if ((await product.textContent()).includes(productName)) {
                return true;
            }
        }

        return false;
    }
};