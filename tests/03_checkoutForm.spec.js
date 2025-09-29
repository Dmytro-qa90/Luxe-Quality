import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout', () => {
  it('should display checkout form', async () => {
    await login();

    await inventoryPage.addToCart(0);

    await cartPage.open();

    await cartPage.goToCheckout();

    expect(await checkoutPage.firstName.isDisplayed()).toBe(true);
  });
});

