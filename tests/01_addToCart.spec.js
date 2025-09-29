import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Inventory', () => {
  it('should add first product to cart', async () => {
    await login(); 

    await inventoryPage.addToCart(0);

    const count = await inventoryPage.getCartCount();
    expect(count).toBe(1);
  });
});
