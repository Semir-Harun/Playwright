import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});

test('homepage has correct heading', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('page content is accessible', async ({ page }) => {
  await page.goto('https://playwright.dev');
  
  // Check that the main content is present
  await expect(page.locator('body')).toContainText('Playwright');
  await expect(page.locator('body')).toContainText('testing');
});