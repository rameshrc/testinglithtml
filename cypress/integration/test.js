/// <reference types="cypress" />

describe('element-one', () => {
    beforeEach(() => {
      cy.visit('/index.html')
    })
  
  
    it('renders a message on button click', () => {
      cy.get('element-one').get('button', { includeShadowDom: true }).nhover()
    })
  })
  
  
  