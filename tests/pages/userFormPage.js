class UserFormPage {
  constructor(page) {
    this.page = page;
    this.roleDropdown = page.locator('div.oxd-select-wrapper').first();
    this.statusDropdown = page.locator('div.oxd-select-wrapper').nth(1);
    this.employeeInput = page.locator('input[placeholder="Type for hints..."]');
    this.usernameInput = page.locator('.oxd-form input').nth(1);
    this.passwordInput = page.locator('input[type="password"]').nth(0);
    this.confirmPasswordInput = page.locator('input[type="password"]').nth(1);
    this.saveButton = page.locator('button:has-text("Save")');
  }

  async fillForm() {
    await this.roleDropdown.click();
    await this.page.getByRole('option', { name: 'Admin' }).click();
    await this.statusDropdown.click({ force: true });
    await this.page.getByRole('option', { name: 'Enabled' }).click();

    await this.employeeInput.fill('John');
    await this.page.getByRole('option', { name: /John Doe/i }).click();

    const username = 'automationuser' + Date.now();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill('Test@1234');
    await this.confirmPasswordInput.fill('Test@1234');

    return username;
  }

  async save() {
    await this.saveButton.click();
  }
}

module.exports = { UserFormPage };
