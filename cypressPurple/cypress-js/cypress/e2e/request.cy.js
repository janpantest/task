
describe('api test', () => {

  

  it('Api request - get status', function () {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/auth',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) =>{
      expect(res.status).to.eq(200);
      // cy.log(JSON.stringify(res));
    })
  })



})


