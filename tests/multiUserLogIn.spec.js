const { test, expect } = require('@playwright/test');


test("Swag labs", async ({ page }) =>{
    await page.goto("https://www.saucedemo.com/");
    //await page.getByRole('text', {name: "Username"}).fill("standard_user");
    //await page.getByTestId('username').fill("standard_user");
    await page.locator("#user-name").fill("standard_user");
    await page.getByRole('password',{name: "password"}).fill("secret_sauce");
    await page.getByRole('submit', {name : "login-button"}).click();
    await page.getByRole('button', {name: "add-to-cart-sauce-labs-backpack"}).click();
    await page.getByTestId('shopping-cart-link').click();
    await page.getByTestId('checkout').click();
    await page.getByRole('text', {name: "firstName"}).fill("Sk");
    await page.getByRole('text', {name: "last-name"}).fill("Rohit");
    await page.getByRole('text', {name: "postalCode"}).fill("1234");
    await page.getByTestId('continue').click();
    await page.getByTestId('finish').click();
    await expect(page.getByTestId('complete-header')).toHaveText("Thank you for your order!");
    await page.getByTestId('back-to-products').click();
    await expect(page.getByRole('button', {name: "add-to-cart-sauce-labs-backpack"})).toBeVisible();
})