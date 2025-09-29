class CartPage {
  get checkoutBtn() {
    return $('#checkout');
  }

  get cartItems() {
    return $$('.cart_item');
  }

  async open() {
    await browser.url('/cart.html');   
  }

  async goToCheckout() {
    await this.checkoutBtn.waitForDisplayed();
    await this.checkoutBtn.click();
  }

  async getItemsCount() {
    return (await this.cartItems).length;
  }
}

export default new CartPage();



