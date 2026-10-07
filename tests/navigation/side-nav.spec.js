const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Dashboard and Navigation', () => {
  test('Side navigation links open expected screens', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = await loginPage.loginAsAdmin();

    await expect(dashboard.sideNav).toBeVisible();

    const menuChecks = [
      { label: 'Admin', route: /\/admin\/viewSystemUsers$/, heading: /Admin/i },
      { label: 'PIM', route: /\/pim\/viewEmployeeList$/, heading: /PIM/i },
      { label: 'Leave', route: /\/leave\/viewLeaveList$/, heading: /^Leave$/i },
      { label: 'My Info', route: /\/pim\/viewPersonalDetails\/empNumber\/\d+$/, heading: /Personal Details/i },
      { label: 'Dashboard', route: /\/dashboard\/index$/, heading: /Dashboard/i },
    ];

    for (const item of menuChecks) {
      await dashboard.navigateToMenu(item.label);
      await expect(page).toHaveURL(item.route);
      await expect(page.getByRole('heading', { name: item.heading })).toBeVisible();
    }

    await dashboard.navigateToMenu('Dashboard');
    await expect(page).toHaveURL(/\/dashboard\/index$/);
  });
});
