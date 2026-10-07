const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Admin and User Management', () => {
  test('Admin section loads and search works', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = await loginPage.loginAsAdmin();
    const adminPage = await dashboard.openAdmin();

    await expect(page).toHaveURL(/\/admin\/viewSystemUsers$/);

    await adminPage.search('Admin');
    await expect(page.locator('body')).toContainText('Admin');

    await adminPage.search('nonexistentuser123');
    await expect(page.locator('body')).toContainText(/No Records Found|No records found/i);
  });
});
