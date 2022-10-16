import 'cypress-xpath'

class axioryHome {

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
        deposit: '//label[@for="deposit"]'
    }

    inputFields = {
        firstName: '//input[@id="firstname"]',
        lastName: '//input[@id="lastname"]',
        phone: '//input[@id="phone"]',
        country: '//input[@id="countryLabel"]',
        email: '//input[@id="email"]',
        deposit: '//input[@id="deposit"]'
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
        currecncyEur: '//option[@value="EUR"]'

    }

    checkBoxes = {
        iAgree: '//input[@id="iAgreeDemo"]'
    }

    buttons = {
        submit: '//div[@class="atm-submit-container"]'
    }

    enterFirstName(string){
        cy.xpath(this.inputFields.firstName).type(string);
    }

    enterLastName(string){
        cy.xpath(this.inputFields.lastName).type(string);
    }

    enterPhone(string){
        cy.xpath(this.inputFields.phone).type(string);
    }

    enterCountry(string){
        cy.xpath(this.inputFields.country).type(string);
    }

    enterEmail(string){
        cy.xpath(this.inputFields.email).type(string);
    }

    selectPlatform() {
        cy.xpath(this.selectBoxes.platform).click();
        cy.xpath(this.selectOptions.mt4).click()
    }

    selectAccountType() {
        cy.xpath(this.selectBoxes.accountType).click();
        cy.xpath(this.selectOptions.standard).click();
    }

    selectLeverage() {
        cy.xpath(this.selectBoxes.leverage).click();
        cy.xpath(this.selectOptions.firstLaverage).click();
    }

    selectCurrency() {
        cy.xpath(this.selectBoxes.currency).click();
        cy.xpath(this.selectOptions.currencyJpy).click();
    }

    inputAmount(string) {
        cy.xpath(this.inputFields.deposit).type(string);
    }

    tickCheckbox() {
        cy.xpath(this.checkBoxes.iAgree).click()
    }

    clickAccept() {
        cy.xpath(this.buttons.submit).click()
    }

}

module.exports = new axioryHome();
module.exports.axioryHome = axioryHome;
