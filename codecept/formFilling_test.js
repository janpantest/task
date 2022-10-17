Feature('Fill form');

const pattern = 'test';
const email = '@email.com';
let randomNo = Math.floor(Math.random() * 10000) + 1;
let randomString = '';
let brandNewMail = pattern + pattern.slice(-1) + email;
const registeredUser = 'test@email.com';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function newString(length) {
    let res = '';
    let i = 0;
    while (i < length) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
        i++
    } 
    return res;
}
randomString = newString(7);

let newMail = randomString + email;

Scenario('filling form - happy path', async ({ I, axioryFormPage, axioryRegisterPage }) => {
    I.amOnPage('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo');
    axioryFormPage.checkLogo();
    axioryFormPage.checkParagraph();
    axioryFormPage.checkIAgreeSection();
    axioryFormPage.checkFooter();
    axioryFormPage.enterFirstName('Yoko');
    axioryFormPage.enterLastName('Ono');
    axioryFormPage.enterPhone(randomString);
    axioryFormPage.enterCountry('Jap');
    axioryFormPage.enterEmail(newMail.toLowerCase());
    axioryFormPage.selectPlatform('MetaTrader4');
    axioryFormPage.selectAccountType('Standard (STP)');
    axioryFormPage.selectLeverage('1:1');
    axioryFormPage.selectCurrency('JPY');
    axioryFormPage.enterAmount('1000');
    axioryFormPage.tickCheckbox();
    axioryFormPage.clickAccept();
    axioryRegisterPage.checkRegisterPage();
}).tag('@happy')

Scenario('filling form - without select boxes', async ({ I, axioryFormPage, axioryRegisterPage }) => {
    I.amOnPage('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo');
    axioryFormPage.checkLogo();
    axioryFormPage.checkParagraph();
    axioryFormPage.checkIAgreeSection();
    axioryFormPage.checkFooter();
    axioryFormPage.enterFirstName('Yoko');
    axioryFormPage.enterLastName('Ono');
    axioryFormPage.enterPhone('+777 777 777');
    axioryFormPage.enterCountry('Jap');
    axioryFormPage.enterEmail(newMail.toUpperCase());
    axioryFormPage.enterAmount('1000');
    axioryFormPage.tickCheckbox();
    axioryFormPage.clickAccept();
    axioryRegisterPage.checkRegisterPage();
}).tag('@selectboxesUntouched')

Scenario('filling form - incorrect name', async ({ I, axioryFormPage, axioryRegisterPage }) => {
    I.amOnPage('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo');
    axioryFormPage.checkLogo();
    axioryFormPage.checkParagraph();
    axioryFormPage.checkIAgreeSection();
    axioryFormPage.checkFooter();
    axioryFormPage.enterFirstName('Yoko' + randomNo);
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
    axioryFormPage.checkUrl();
}).tag('@nameWrong')

Scenario('chat-box checking', async ({ I, axioryFormPage, axioryRegisterPage }) => {
    I.amOnPage('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo');
    axioryFormPage.checkLogo();
    axioryFormPage.checkParagraph();
    axioryFormPage.checkIAgreeSection();
    axioryFormPage.checkFooter();
    axioryFormPage.openChatWindow();
}).tag('@chat')