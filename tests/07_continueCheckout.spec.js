import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import { generateUserData } from '../helpers/dataHelper.js';

describe('Checkout - Continue', () => {
  it('should go to overview page after filling checkout form', async () => {
    await login();

    await inventoryPage.addToCart(0);

    await cartPage.open();

    await cartPage.goToCheckout();

    const user = generateUserData();

    await checkoutPage.fillForm(user);

    await checkoutPage.continue();

    expect(await checkoutPage.isOverviewPage()).toBe(true);
  });
});



