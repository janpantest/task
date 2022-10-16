import axioryHome from '../../pages/axioryHome'


describe('form test', () => {


  it('form test', () => {
    cy.visit('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo');
    axioryHome.enterFirstName('Yoko');
    axioryHome.enterLastName('Ono');
    axioryHome.selectPlatform();
  })
})