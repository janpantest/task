const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    },
    "AssertWrapper": {
      "require": "codeceptjs-assert"
    },
  },
  include: {
    "gHomePage": "./pages/gHomePage.js",
    "gResultsPage": "./pages/gResultsPage.js",
    "vmHomePage": "./pages/vmHomePage.js",
    "vmMestoUradPage": "./pages/vmMestoUradPage.js",
    "vmVedeniMestaPage": "./pages/vmVedeniMestaPage.js",
    "vmVedeniMestaDetailPage": "./pages/vmVedeniMestaDetailPage.js",
    "idnesHomePage": "./pages/idnesHomePage.js",
    "idnesBrnoPage": "./pages/idnesBrnoPage.js",
    "axioryFormPage": "./pages/axioryForm.js",
    "axioryRegisterPage": "./pages/axioryRegister.js"
  },
  name: 'codeceptJS'
}