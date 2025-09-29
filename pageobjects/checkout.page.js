class CheckoutPage {
  get firstName() {
    return $('#first-name');
  }

  get lastName() {
    return $('#last-name');
  }

  get postal() {
    return $('#postal-code');
  }

  get continueBtn() {
    return $('#continue');
  }

  get finishBtn() {
    return $('#finish');
  }

  get overviewContainer() {
    return $('.checkout_summary_container'); 
  }

  get errorMsg() {
    return $('.error-message-container');
  }

  async fillForm({ firstName, lastName, postalCode }) {
    if (firstName !== undefined) {
      await this.firstName.waitForDisplayed();
      await this.firstName.setValue(firstName);
    }
    if (lastName !== undefined) {
      await this.lastName.waitForDisplayed();
      await this.lastName.setValue(lastName);
    }
    if (postalCode !== undefined) {
      await this.postal.waitForDisplayed();
      await this.postal.setValue(postalCode);
    }
  }

  async continue() {
    await this.continueBtn.waitForDisplayed();
    await this.continueBtn.click();
  }

  async finish() {
    await this.finishBtn.waitForDisplayed();
    await this.finishBtn.click();
  }

  async getFirstNameValue() {
    return this.firstName.getValue();
  }

  async getLastNameValue() {
    return this.lastName.getValue();
  }

  async getPostalCodeValue() {
    return this.postal.getValue();
  }

  async isOverviewPage() {
    await this.overviewContainer.waitForDisplayed();
    return this.overviewContainer.isDisplayed();
  }
}

export default new CheckoutPage();



