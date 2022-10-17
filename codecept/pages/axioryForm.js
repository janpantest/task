const { I } = inject();

class axioryForm {

  logos = {
    axiory: '//img[@class="logo"]',
}

  labels = {
      pageTitle: '//h1[@class="atm-h1-container atm-headline-container"]',
      intro: '//p[@class="atm-paragraph "]',
      formTitle: '//h2[@class="atm-h2-container atm-headline-container"]',
      firstName: '//label[@for="firstname"]',
      lastName: '//label[@for="lastname"]',
      phone: '//label[@for="phone"]',
      country: '//div[@for="countryLabel"]',
      email: '//label[@for="email"]',
      platform: '//label[@for="platform"]',
      accountType: '//label[@for="accountType"]',
      leverage: '//label[@for="leverage"]',
      currency: '//label[@for="currency"]',
      deposit: '//label[@for="deposit"]',
      iAgree: '//label[@for="iAgreeDemo"]'
  }

  inputFields = {
      firstName: '//input[@id="firstname"]',
      lastName: '//input[@id="lastname"]',
      phone: '//input[@id="phone"]',
      country: '//input[@id="countryLabel"]',
      email: '//input[@id="email"]',
      deposit: '//input[@id="deposit"]',
      chatWindowFirstName: '(//input[@data-garden-id="forms.input"])[1]',
      chatWindowLastName: '(//input[@data-garden-id="forms.input"])[2]',      
  }

  selectBoxes = {
      platform: '//select[@id="platform"]',
      accountType: '//select[@id="accountType"]',
      leverage: '//select[@id="leverage"]',
      currency: '//select[@id="currency"]'
  }

  selectOptions = {
      mt4: '//option[@value="mt4"]',
      ctrader: '//option[@value="ctrader"]',
      standard: '//option[@value="standard"]',
      nano: '//option[@value="nano"]',
      firstLaverage: '(//option[contains(text(), "1:")])[1]',
      currencyJpy: '//option[@value="JPY"]',
      currencyUsd: '//option[@value="USD"]',
      currencyEur: '//option[@value="EUR"]'

  }

  checkBoxes = {
      iAgree: '//input[@id="iAgreeDemo"]'
  }

  buttons = {
      submit: '//div[@class="atm-submit-container"]',
      chat: '//iframe[@id="launcher"]'
  }

  footers = {
    footer: '//div[@class="cmpnt-footer-container"]'
  }

  messages = {
    error1: '(//div[@class="error-messages"])[1]'
  }

  checkLogo() {
    I.waitForElement(this.logos.axiory, 10);
  }

  checkParagraph() {
    I.waitForElement(this.labels.intro, 10); 
  }

  checkIAgreeSection() {
    I.waitForElement(this.labels.iAgree, 10);
  }

  checkFooter() {
    I.waitForElement(this.footers.footer, 10);
  }

  enterFirstName(string) {
      I.waitForElement(this.inputFields.firstName, 10);
      I.fillField(this.inputFields.firstName, string);
  }

  enterLastName(string) {
      I.waitForElement(this.inputFields.lastName, 10);
      I.fillField(this.inputFields.lastName, string);
  }

  enterPhone(string) {
      I.waitForElement(this.inputFields.phone, 10)
      I.fillField(this.inputFields.phone, string);
  }

  enterCountry(string) { 
      I.waitForElement(this.inputFields.country, 10)
      I.fillField(this.inputFields.country, string);
  }

  enterEmail(string) {
      I.waitForElement(this.inputFields.email, 10)
      I.fillField(this.inputFields.email, string);
  }

  selectPlatform(string) {
      I.waitForElement(this.selectBoxes.platform, 10)
      // I.click(this.selectBoxes.platform);
      // I.click(this.selectOptions.mt4);
      I.fillField(this.selectBoxes.platform, string)
  }

  selectAccountType(string) {
      I.waitForElement(this.selectBoxes.accountType, 10)
      // I.click(this.selectBoxes.accountType)
      // I.click(this.selectOptions.standard)
      I.fillField(this.selectBoxes.accountType, string)

  }

  selectLeverage(string) {
      // I.waitForElement(this.selectBoxes.leverage, 10)
      // I.click(this.selectBoxes.leverage)
      // I.click(this.selectOptions.firstLaverage)
      I.fillField(this.selectBoxes.leverage, string)
  }

  selectCurrency(string) {
      // I.waitForElement(this.selectBoxes.currency, 10)
      // I.click(this.selectBoxes.currency);
      // I.waitForElement('//option[@value="JPY"]', 10)
      // I.click(this.selectOptions.currencyJpy)
      I.fillField(this.selectBoxes.currency, string)
  }

  enterAmount(string) {
      I.waitForElement(this.inputFields.deposit, 10)
      I.fillField(this.inputFields.deposit, string);
  }

  tickCheckbox() {
      I.waitForElement(this.checkBoxes.iAgree, 10)
      I.click(this.checkBoxes.iAgree);
  }

  clickAccept() {
      I.waitForElement(this.buttons.submit, 10)
      I.click(this.buttons.submit)
  }

  openChatWindow() {
    I.waitForElement(this.buttons.chat, 10);
    I.click(this.buttons.chat);
  }

  checkUrl(string) {
    I.seeInCurrentUrl('registration/demo')
  }

}

module.exports = new axioryForm();
module.exports.axioryForm = axioryForm;