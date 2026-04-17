import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe.configure({ mode: 'parallel' });

test('User 1 - Login & Add Item', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await page.click('.inventory_item button');
});

test('User 2 - Login & Checkout', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await page.click('.shopping_cart_link');
  await page.click('#checkout');
});

test('User 3 - Invalid Login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('invalid_user', 'wrong_pass');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});