import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import { generateUserData } from '../helpers/dataHelper.js';

describe('Checkout Form - First Name', () => {
  it('should enter random first name', async () => {
    await login();

    await inventoryPage.addToCart(0);

    await cartPage.open();

    await cartPage.goToCheckout();

    const user = generateUserData();

    await checkoutPage.fillForm({ firstName: user.firstName });

    expect(await checkoutPage.getFirstNameValue()).toBe(user.firstName);
  });
});

