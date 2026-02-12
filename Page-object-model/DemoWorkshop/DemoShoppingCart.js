const { expect } = require('@playwright/test');

class DemoShoppingCart {
  constructor(page) {
    this.page = page;

    this.addCartSuccessMessageLocator = page.getByText(
      "The product has been added to your"
    );
    this.shoppingCart = page.locator("#topcartlink");
    this.countryName = page.locator("#CountryId");
    this.zipNumber = page.locator("#ZipPostalCode");
    this.agreeTermsAndConditions = page.locator("#termsofservice");
    this.checkout = page.locator("#checkout");
  }

  async addCartSuccessMessage() {
    await expect(this.addCartSuccessMessageLocator).toBeVisible();
  }

  async shoppingCartFillOut() {
    await this.shoppingCart.click();
    await this.countryName.selectOption("India");
    await this.zipNumber.fill("1234");
    await this.agreeTermsAndConditions.click();
    await this.checkout.click();
  }
}

module.exports = DemoShoppingCart;