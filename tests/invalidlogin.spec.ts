import { test, expect } from '@playwright/test';

test('SauceDemo invalid login test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('invalid_user');
  await page.locator('#password').fill('secret');
  await page.locator('#login-button').click();
 
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(/Username and password do not match/);

 
  await page.screenshot({ path: 'screenshots/error.png' });
 

});