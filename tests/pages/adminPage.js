const { UserFormPage } = require('./userFormPage');

class AdminPage {
  constructor(page) {
    this.page = page;
    this.usernameFilter = page.locator('.oxd-form-row').first().locator('input').first();
    this.searchButton = page.locator('button:has-text("Search")');
    this.addButton = page.locator('button:has-text("Add")');
    this.saveButton = page.locator('button:has-text("Save")');
  }

  async open() {
    await this.page.locator('a:has-text("Admin")').click();
  }

  async search(username) {
    await this.usernameFilter.fill(username);
    await this.searchButton.click();
  }

  async openAddUser() {
    await this.addButton.click();
    return new UserFormPage(this.page);
  }
}

module.exports = { AdminPage };
