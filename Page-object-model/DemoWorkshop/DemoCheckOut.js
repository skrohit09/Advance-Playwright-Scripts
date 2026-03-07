const { expect } = require('@playwright/test');

class DemoCheckOut {
  constructor(page) {
    this.page = page;

    this.billingDetails = page.locator("input[onclick='Billing.save()']");
    this.shippingDetails = page.locator("input[onclick='Shipping.save()']");
    this.shippingMethod = page.locator("input[onclick='ShippingMethod.save()']");
    this.paymentMethod = page.locator("input[onclick='PaymentMethod.save()']");
    this.paymentInfo = page.locator("input[onclick='PaymentInfo.save()']");
    this.orderConfirmation = page.locator(".confirm-order-next-step-button");
    this.orderSuccessMessage = page.locator('.title')
    this.orderCompletion = page.locator(".order-completed-continue-button");
  }

  async CheckOutProcess() {
    await this.billingDetails.click();
    await this.shippingDetails.click();
    await this.shippingMethod.click();
    await this.paymentMethod.click();
    await this.paymentInfo.click();
    await this.orderConfirmation.click();

    await this.page.waitForTimeout(4000);

    await expect(this.orderSuccessMessage)
      .toHaveText("Your order has been successfully processed!");

    await this.orderCompletion.click();
  }
}

module.exports = DemoCheckOut;