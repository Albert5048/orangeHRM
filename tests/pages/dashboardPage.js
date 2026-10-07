const { AdminPage } = require('./adminPage');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.sideNav = page.locator('.oxd-sidepanel');
    this.userMenu = page.locator('.oxd-userdropdown-tab');
    this.logoutButton = page.getByText('Logout');
    this.summaryCards = page.locator('.oxd-grid-item');
  }

  async openAdmin() {
    await this.page.locator('a:has-text("Admin")').click();
    return new AdminPage(this.page);
  }

  async logout() {
    await this.userMenu.click();
    await this.logoutButton.click();
  }

  async navigateToMenu(label) {
    await this.page.getByRole('link', { name: label }).click();
  }
}

module.exports = { DashboardPage };
