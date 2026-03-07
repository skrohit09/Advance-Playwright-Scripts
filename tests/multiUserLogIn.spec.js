const { test, expect } = require('@playwright/test');
const usersData = require('../Utils/Swag_labs users/users.json');

test.describe('Multi-User Login Tests', () => {
    usersData.users.forEach((user) => {
        test(`Login with ${user.username}`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('[data-test="username"]').fill(user.username);
            await page.locator('[data-test="password"]').fill(user.password);
            const startTime = Date.now();
            await page.locator('[data-test="login-button"]').click();
            const endTime = Date.now();
            if (endTime - startTime > 3000) {
                console.log("this page is slow 😒, there is a performence glitch");
            }
            if(user.username === 'locked_out_user'){
                await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
                return;
            }
            
            await expect(page.locator(".app_logo")).toBeVisible();
            
            await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            await page.locator('[data-test="shopping-cart-link"]').click();
            await page.locator('[data-test="checkout"]').click();
            await page.locator('[data-test="firstName"]').fill('Sk');
            await page.locator('[data-test="lastName"]').fill('Rohit');
           const lastNameValue = await page.locator('[data-test="lastName"]').inputValue();
            if (lastNameValue === '') {
                console.log("This user have a problem 😒");
                return;
            }
            await page.locator('[data-test="postalCode"]').click();
            await page.locator('[data-test="postalCode"]').fill('1234');
            await page.locator('[data-test="continue"]').click();
            await page.locator('[data-test="finish"]').click();
            await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
            const startTime1 = Date.now();
            await page.locator('[data-test="back-to-products"]').click();
            const endTime1 = Date.now();
            if (endTime - startTime > 3000) {
                console.log("this page is slow 😒, there is a performence glitch");
            }
            await page.getByRole('button', { name: 'Open Menu' }).click();
            await page.locator('[data-test="logout-sidebar-link"]').click();
            await expect(page.locator('[data-test="login-button"]')).toBeVisible();
        });
    });
});