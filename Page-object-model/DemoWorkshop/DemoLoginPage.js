const { expect } = require('@playwright/test');

class DemoLoginPage {
  constructor(page) {
    this.page = page;

    this.logInPage = page.locator(".ico-login");
    this.email = page.locator("#Email");
    this.password = page.locator("#Password");
    this.logInButton = page.locator(".login-button");
  }

  async navigationToLogin() {
    await this.page.goto("https://demowebshop.tricentis.com/");
  }

  async login(email, password) {
    await this.logInPage.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.logInButton.click();
  }
}

module.exports = DemoLoginPage;