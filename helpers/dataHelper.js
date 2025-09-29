import { faker } from '@faker-js/faker';
import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import checkoutCompletePage from '../pageobjects/checkoutComplete.page.js';

export const USERNAME = 'standard_user';
export const PASSWORD = 'secret_sauce';

export const generateUserData = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  postalCode: faker.location.zipCode(),
});

export const login = async (username = USERNAME, password = PASSWORD) => {
  await loginPage.open();
  await loginPage.login(username, password);
};

export const addProductToCart = async (index = 0) => {
  await inventoryPage.addToCart(index);
};

export const openCart = async () => {
  await inventoryPage.openCart();
};

export const goToCheckoutFromCart = async () => {
  await cartPage.goToCheckout();
};

export const fillCheckoutForm = async (user) => {
  await checkoutPage.fillForm(user);
};

export const finishCheckout = async () => {
  await checkoutPage.finish();
};

export const getOrderConfirmationText = async () => {
  return checkoutCompletePage.getHeaderText();
};

