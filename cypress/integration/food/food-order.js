/// <reference types="cypress" />

import Food from '../../pageObjects/food';

describe('food menu', () => {
  const foodPage = new Food();
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('http://localhost:4200/#/')
    cy.loginHospo();
  })

  it('food menu opens', () => {
    foodPage.parentMenu('mains').first().click();
    foodPage.addOrderModal().click();
    foodPage.foodDetailMenu().should('be.visible')
  })
  it('added to menu', () => {
    foodPage.parentMenu('mains').first().click();
    cy.wait(500)
    foodPage.addOrderModal().click();
    cy.wait(500)
    foodPage.addOrder().click();
    cy.wait(500)
    cy.visit('http://localhost:4200/#/tabs/order')
    cy.wait(500)
    foodPage.orderPageName().should('contain', 'Steak & Chips')
  })
  it('failed test', () => {
    cy.visit('http://localhost:4200/#/tabs/order')
    foodPage.parentMenu('mains').first().click();
    cy.wait(500)
  })
})
