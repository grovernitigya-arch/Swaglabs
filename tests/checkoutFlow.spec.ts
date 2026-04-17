import { test, expect } from '@playwright/test';

test('Test Case 4 – Checkout Flow', async ({ page }) => {

 
  await page.goto('https://www.saucedemo.com');


await page.goto('https://www.saucedemo.com');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await page.locator('.shopping_cart_link').click();
 
  const cartItems = page.locator('.inventory_item_name');
  await expect(cartItems).toHaveCount(2);
  await expect(cartItems.nth(0)).toHaveText('Sauce Labs Backpack');
  await expect(cartItems.nth(1)).toHaveText('Sauce Labs Bike Light');

  
  await page.locator('#checkout').click();

  
  await page.locator('#first-name').fill('Johny');
  await page.locator('#last-name').fill('Dhir');
  await page.locator('#postal-code').fill('12345');
  await page.locator('#continue').click();

  await expect(page.locator('.title')).toHaveText('Checkout: Overview');


  await page.locator('#finish').click();
  await page.screenshot({ path: 'screenshots/checkout-complete.png' });
 
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});