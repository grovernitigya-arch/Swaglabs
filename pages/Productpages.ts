import { Page } from '@playwright/test';

export class ProductsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

async getProductPrices(): Promise<number[]> {
  const texts = await this.page.locator('.inventory_item_price').allTextContents();

  return texts.map(t => parseFloat(t.replace('$', '')));
}

async sortLowToHigh() {
  await this.page.locator('.product_sort_container').waitFor({ state: 'visible' });
  await this.page.locator('.product_sort_container').selectOption('lohi');
}
}