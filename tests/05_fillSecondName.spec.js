import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import { generateUserData } from '../helpers/dataHelper.js';

describe('Checkout Form - Last Name', () => {
  it('should enter random last name', async () => {
    await login();

    await inventoryPage.addToCart(0);

    await cartPage.open();

    await cartPage.goToCheckout();

    const user = generateUserData();

    await checkoutPage.fillForm({ lastName: user.lastName });

    expect(await checkoutPage.getLastNameValue()).toBe(user.lastName);
  });
});

