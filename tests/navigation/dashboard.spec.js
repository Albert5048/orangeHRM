const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Dashboard and Navigation', () => {
  test('Dashboard widgets load without errors', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = await loginPage.loginAsAdmin();

    await expect(page).toHaveURL(/\/dashboard\/index$/);
    await expect(dashboard.summaryCards).not.toHaveCount(0);

    await page.reload();

    await expect(page).toHaveURL(/\/dashboard\/index$/);
    await expect(dashboard.summaryCards).not.toHaveCount(0);
  });
});
