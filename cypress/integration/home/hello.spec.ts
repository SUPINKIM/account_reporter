/// <reference types="cypress" />

describe('Homepage', () => {
  it('show correct text', () => {
    cy.visit('/');

    cy.contains('h1', 'Hello Vue 3');
  });
});
