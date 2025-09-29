import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import checkoutCompletePage from '../pageobjects/checkoutComplete.page.js';
import { generateUserData } from '../helpers/dataHelper.js';

describe('Checkout - Finish order', () => {
  it('should complete checkout and navigate to complete page', async () => {
    await login();

    await inventoryPage.addToCart(0);

    await cartPage.open();

    await cartPage.goToCheckout();

    const user = generateUserData();

    await checkoutPage.fillForm(user);

    await checkoutPage.continue();
    await checkoutPage.finish();

    expect(await checkoutCompletePage.isCompletePage()).toBe(true);
  });
});




