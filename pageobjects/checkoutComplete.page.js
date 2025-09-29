class CheckoutCompletePage {
  get completeHeader() {
    return $('.complete-header');
  }

  get backHomeBtn() {
    return $('#back-to-products');
  }

  async getHeaderText() {
    await this.completeHeader.waitForDisplayed();
    return this.completeHeader.getText();
  }

  async clickBackHome() {
    await this.backHomeBtn.waitForDisplayed();
    await this.backHomeBtn.click();
  }

  // Додаємо метод для перевірки, що ми на сторінці завершення замовлення
  async isCompletePage() {
    await this.completeHeader.waitForDisplayed();
    return this.completeHeader.isDisplayed();
  }
}

export default new CheckoutCompletePage();



