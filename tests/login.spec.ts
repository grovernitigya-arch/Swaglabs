import { test, expect} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';

test('SauceDemo login test', async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');     
await page.screenshot({ path: 'screenshots/login.png' });
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

}); 