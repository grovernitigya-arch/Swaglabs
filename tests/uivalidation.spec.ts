import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/Productpages';

test('Validate product sorting ', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login('standad_user', 'secret_sauce');

   const originalPrices = await productsPage.getProductPrices();

  await productsPage.sortLowToHigh();

  const sortedPrices= await productsPage.getProductPrices();

  const sortedPricesExpected = [...originalPrices].sort((a, b) => a - b);

  expect(sortedPrices).toEqual(sortedPricesExpected);
});