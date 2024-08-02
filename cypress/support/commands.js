// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-xpath';
//
// -- This is a parent command --
Cypress.Commands.add('adminLogin', (email, password) => {
    cy.visit(`${Cypress.env('HOST')}/login`);

    cy.get('input').eq(0).type(email);
    cy.get('input').eq(1).type(password);

    cy.get('button').click();
 })

 Cypress.Commands.add('userLogin', (email, password) => {
    cy.visit('https://pet-shop.buckhill.com.hr');
    cy.get('//span[text()=" LOGIN "]').click();
    cy.xpath('//div[@class="login__form elevation-2"]').should('be.visible');

    cy.xpath('(//div[@class = "login__form elevation-2"]//input)[1]').type(email);
    cy.xpath('(//div[@class = "login__form elevation-2"]//input)[2]').type(password);

    cy.xpath('//span[text()=" Log in "]').click();
 })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })