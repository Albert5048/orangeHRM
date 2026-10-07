const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Authentication', () => {
  test('Logout from dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = await loginPage.loginAsAdmin();

    await expect(page).toHaveURL(/\/dashboard\/index$/);

    await dashboard.logout();

    await expect(page).toHaveURL(/\/auth\/login$/);
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  });
});
