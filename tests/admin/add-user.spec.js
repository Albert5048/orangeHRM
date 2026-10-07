const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Admin and User Management', () => {
  test('Add a new user with valid data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = await loginPage.loginAsAdmin();
    const adminPage = await dashboard.openAdmin();

    const userFormPage = await adminPage.openAddUser();
    await userFormPage.fillForm();
    await userFormPage.save();

    await expect(page.locator('body')).toContainText(/Successfully Saved|Success/i);
  });
});
