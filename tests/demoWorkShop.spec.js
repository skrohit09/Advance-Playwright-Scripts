const { test, expect } = require('@playwright/test');

const DemoLoginPage = require('../Page-object-model/DemoWorkshop/DemoLoginPage.js');
const DemoShoppingCart = require('../Page-object-model/DemoWorkshop/DemoShoppingCart.js');
const DemoCheckOut = require('../Page-object-model/DemoWorkshop/DemoCheckOut.js');

test("Buy Smartphone", async ({ page }) => {
  const demoLoginPage = new DemoLoginPage(page);
  const demoShoppingCart = new DemoShoppingCart(page);
  const demoCheckOut = new DemoCheckOut(page);

  const email = "unknownsk@gmail.com";
  const password = "Unknown";

  // Login
  await demoLoginPage.navigationToLogin();
  await demoLoginPage.login(email, password);

  // Add to cart
  await page.getByRole('link', { name: 'Electronics' }).nth(0).click();
  await page.getByAltText('Picture for category Cell phones').click();
  await page.locator('.button-2').nth(0).click();
  await demoShoppingCart.addCartSuccessMessage();

  // Checkout
  await demoShoppingCart.shoppingCartFillOut();
  await demoCheckOut.CheckOutProcess();

  // Logout
  await page.locator('.ico-logout').click();
});

test("Buy Computing and Internet Book", async ({ page }) => {
  const demoLoginPage = new DemoLoginPage(page);
  const demoShoppingCart = new DemoShoppingCart(page);
  const demoCheckOut = new DemoCheckOut(page);

  const email = "unknownsk@gmail.com";
  const password = "Unknown";

  // Login
  await demoLoginPage.navigationToLogin();
  await demoLoginPage.login(email, password);

  // Add to cart
  await page.getByRole('link', { name: 'Books' }).nth(0).click();
  await page.getByRole('img', { name: 'Picture of Computing and Internet' }).click();
  await page.locator('.add-to-cart-button').click();
  await demoShoppingCart.addCartSuccessMessage();

  // Checkout
  await demoShoppingCart.shoppingCartFillOut();
  await demoCheckOut.CheckOutProcess();

  // Logout
  await page.locator('.ico-logout').click();
});