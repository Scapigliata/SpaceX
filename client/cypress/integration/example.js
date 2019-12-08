<reference types="cypress" />;

import Chance from 'chance';
const chance = new Chance();

describe('This is my example test', () => {
  const email = chance.email();
  const password = 'ValidPassword123';

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a title', () => {
    cy.contains('SpaceX');
    expect(2).to.equal(2);
  });

  it('blocks unprotected routes', () => {
    cy.get('#navtoggle').click();
    cy.contains('Module').click();
    cy.get('notification-message')
      .children()
      .should('contain', 'You must be logged in')
      .and('be.visible');
  });

  it('logs in', () => {
    cy.url().should('include', 'login');
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  });

  it('adds note', () => {
    const text = chance.sentence({ words: 5 });
    const list = cy.get('main');
    list.should('not.contain')

  });
});
