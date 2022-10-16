const { I } = inject();

class axioryForm {

  titles = {
    heading: '//h1[@data-testid="Heading"]'
  }

  checkRegisterPage() {
    I.seeInCurrentUrl('https://portal.axiory.com/register/');
  }

}

module.exports = new axioryForm();
module.exports.axioryForm = axioryForm;