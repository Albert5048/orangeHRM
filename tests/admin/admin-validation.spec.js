const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Admin and User Management', () => {
  test('Validation prevents invalid admin form submission', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = await loginPage.loginAsAdmin();
    const adminPage = await dashboard.openAdmin();
    const userFormPage = await adminPage.openAddUser();

    await userFormPage.saveButton.click();
    await expect(page.locator('.oxd-input-group__message').first()).toBeVisible();

    await page.locator('div.oxd-select-wrapper').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.locator('input[placeholder="Type for hints..."]').fill('invalidemployee');
    await page.locator('input[type="password"]').nth(0).fill('Pass123');
    await page.locator('input[type="password"]').nth(1).fill('Pass456');
    await userFormPage.saveButton.click();

    await expect(page).toHaveURL(/\/admin\/saveSystemUser$/);
    await expect(page.locator('body')).not.toContainText(/User Saved|Successfully Saved/i);
  });
});
