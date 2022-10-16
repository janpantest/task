import 'cypress-xpath'

class sauceInventory {

    titles = {
        title: '//span[@class="title"]'
    }

   
    checkSuccessfulLogin() {
        cy.xpath(this.titles.title)
    }
}



module.exports = new sauceInventory();
module.exports.sauceInventory = sauceInventory;
