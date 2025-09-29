import { login } from '../helpers/dataHelper.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Footer Links', () => {
  beforeEach(async () => {
    await login();
  });

  it('should have correct Twitter link', async () => {
    const href = await inventoryPage.twitterLink.getAttribute('href');
    expect(href).toContain('twitter.com');
  });

  it('should have correct Facebook link', async () => {
    const href = await inventoryPage.facebookLink.getAttribute('href');
    expect(href).toContain('facebook.com');
  });

  it('should have correct LinkedIn link', async () => {
    const href = await inventoryPage.linkedinLink.getAttribute('href');
    expect(href).toContain('linkedin.com');
  });
});

