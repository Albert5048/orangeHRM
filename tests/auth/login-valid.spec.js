const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Authentication', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = await loginPage.loginAsAdmin();

    await expect(page).toHaveURL(/\/dashboard\/index$/);
    await expect(dashboard.sideNav).toBeVisible();
  });
});
