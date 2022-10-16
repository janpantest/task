import 'cypress-xpath'

describe('intercept test', () => {
  

  it('intercept posts', function () {

    cy.visit('https://jsonplaceholder.typicode.com/');
    cy.intercept({
      path: '/posts'
    }).as('post')

    cy.xpath('(//a[@href="/posts"])[1]').click();
    cy.wait('@post').then(inter => {
      expect(inter.response.body).to.have.length(100);
    })
  })

  it('intercept comments', function(){
    cy.visit('https://jsonplaceholder.typicode.com/');
    cy.intercept({
      path: '/comments'
    }).as('comment')

    cy.xpath('(//a[@href="/comments"])[1]').click();
    cy.wait('@comment').then(comm => {
      expect(comm.response.body).to.have.length(500);
      expect(comm.response.statusCode).eq(200);
    })
  })

  it('stubbing static', function () {

    cy.visit('https://jsonplaceholder.typicode.com/');
    cy.intercept('GET', '/posts', {totalPost: 15, shout: 'Hello world'}).as('post');
    cy.xpath('(//a[@href="/posts"])[1]').click();

  })

  it('stubbing dynamic', function () {

    cy.visit('https://jsonplaceholder.typicode.com/');
    cy.intercept('GET', '/posts', {fixture: 'userToLog'}).as('post');
    cy.xpath('(//a[@href="/posts"])[1]').click();

  })



})


