import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Cart', () => {
  it('should open cart page with at least one item', async () => {
    await login();

    await inventoryPage.addToCart(0);

    await cartPage.open();

    const itemsCount = await cartPage.getItemsCount();
    expect(itemsCount).toBeGreaterThan(0);
  });
});

