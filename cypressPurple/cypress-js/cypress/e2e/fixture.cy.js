
import 'cypress-xpath'
import sauceHome from '../../pages/sauceHome'
import sauceInventory from  '../../pages/sauceInventory'


describe('Fixture test', () => {

  let data;
  beforeEach(() => {


    cy.fixture('userToLog').then(function (data) {
      this.data = data
    }); 

    cy.visit('https://www.saucedemo.com/');

  });

  it('Login incorrect', function () {
      sauceHome.login(this.data.wrongUserName, this.data.wrongPassword);
      sauceHome.checkWrongLogin()
  })

  it('Login correct', function () {
    sauceHome.login(this.data.standardUserName, this.data.correctPassword);
    sauceInventory.checkSuccessfulLogin();
  })

})


