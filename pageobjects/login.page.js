class LoginPage {
  get username() {
    return $('#user-name');
  }

  get password() {
    return $('#password');
  }

  get loginBtn() {
    return $('#login-button');
  }

  async open() {
    await browser.url('/');
  }

  async login(username, password) {
    await this.username.waitForDisplayed();
    await this.username.setValue(username);

    await this.password.waitForDisplayed();
    await this.password.setValue(password);

    await this.loginBtn.waitForDisplayed();
    await this.loginBtn.click();
  }
}

export default new LoginPage();
