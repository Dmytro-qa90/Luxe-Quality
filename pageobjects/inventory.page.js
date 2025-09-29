class InventoryPage {
  get addButtons() { return $$('button[data-test^="add-to-cart-"]'); }
  get cartLink() { return $('.shopping_cart_link'); }
  get cartBadge() { return $('.shopping_cart_badge'); }
  get inventoryItems() { return $$('.inventory_item'); }
  get sortDropdown() { return $('.product_sort_container'); }
  get inventoryItemNames() { return $$('div.inventory_item_name'); }
  get twitterLink() { return $('a[href*="twitter.com"]'); }
  get facebookLink() { return $('a[href*="facebook.com"]'); }
  get linkedinLink() { return $('a[href*="linkedin.com"]'); }

  async addToCart(index = 0) {
    const buttons = await this.addButtons;
    if (buttons.length === 0) throw new Error('No add-to-cart buttons found');
    await buttons[index].waitForDisplayed();
    await buttons[index].click();
  }

  async openCart() {
    await (await this.cartLink).waitForDisplayed();
    await this.cartLink.click();
  }

  async getCartCount() {
    const badge = await this.cartBadge;
    return (await badge.isExisting()) ? Number(await badge.getText()) : 0;
  }

  async sortBy(optionText) {
    await (await this.sortDropdown).selectByVisibleText(optionText);
  }

  async getItemNames() {
    const names = [];
    for (const item of await this.inventoryItemNames) {
      names.push(await item.getText());
    }
    return names;
  }
}

export default new InventoryPage();




