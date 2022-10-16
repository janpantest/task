Feature('Fill form');

Scenario('filling form - happy path', async ({ I, axioryFormPage, axioryRegisterPage }) => {

    let name = 'test';
    let email = '@email.com';
    let randomNo = Math.floor(Math.random() * 10000) + 1;
    let brandNewMail = name + randomNo + email;
    let registeredUser = 'test@email.com';

    console.log(brandNewMail);

    I.amOnPage('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo');
    axioryFormPage.checkLogo();
    axioryFormPage.checkParagraph();
    axioryFormPage.checkIAgreeSection();
    axioryFormPage.checkFooter();
    axioryFormPage.enterFirstName('Yoko');
    axioryFormPage.enterLastName('Ono');
    axioryFormPage.enterPhone('+777 777 777');
    axioryFormPage.enterCountry('Jap');
    axioryFormPage.enterEmail(brandNewMail);
    axioryFormPage.selectPlatform('MetaTrader4');
    axioryFormPage.selectAccountType('Standard (STP)');
    axioryFormPage.selectLeverage('1:1');
    axioryFormPage.selectCurrency('JPY');
    axioryFormPage.enterAmount('1000');
    axioryFormPage.tickCheckbox();
    axioryFormPage.clickAccept();
    axioryRegisterPage.checkRegisterPage();
})