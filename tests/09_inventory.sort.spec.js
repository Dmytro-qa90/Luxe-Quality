import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Inventory Sorting', () => {
  beforeEach(async () => {
    await login();
  });

  it('should sort products by name (A to Z)', async () => {
    await inventoryPage.sortBy('Name (A to Z)');
    const names = await inventoryPage.getItemNames();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  });

  it('should sort products by name (Z to A)', async () => {
    await inventoryPage.sortBy('Name (Z to A)');
    const names = await inventoryPage.getItemNames();
    const sorted = [...names].sort().reverse();
    expect(names).toEqual(sorted);
  });
});
