import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {

await page.goto('https://www.saucedemo.com');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  await page.locator('.shopping_cart_link').click();
  await page.screenshot({ path: 'screenshots/cart.png' });
  await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');

});