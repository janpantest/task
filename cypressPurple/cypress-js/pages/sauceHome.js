import 'cypress-xpath'

class sauceHome {

    logos = {
        logo: '//div[@class="login_logo"]'
    }

    fields = {
        userName: '//input[@id="user-name"]',
        pswd: '//input[@id="password"]',
    }

    buttons = {
        login: '//input[@id="login-button"]'
    }

    messages = {
        wrongPassword: '//h3[contains(text(), "Epic sadface: Username and password do not match any user in this service")]'
    }

    login(username, password) {
        cy.xpath(this.fields.userName).type(username)
        cy.xpath(this.fields.pswd).type(password)
        cy.xpath(this.buttons.login).click()
    }

    checkWrongLogin() {
        cy.xpath(this.messages.wrongPassword)

    }
}



module.exports = new sauceHome();
module.exports.sauceHome = sauceHome;
