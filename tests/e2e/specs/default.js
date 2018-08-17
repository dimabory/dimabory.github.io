// https://docs.cypress.io/api/introduction/api.html

describe('test default route /', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should contain Giphy and JavaScript30Days tabs', () => {
    cy.get('.nav').contains('li', 'Giphy')
    cy.get('.nav').contains('li', 'JavaScript30Days')
  })

  it('should contain my name', () => {
    cy.get('.navbar').contains('Dmytro Borysovskyi')
  })

  it('runner should run', () => {
    cy.get('#runner').should('have.class', 'active')
    cy.get('#runner').click()
    cy.get('#runner').should('not.have.class', 'active')
    cy.get('#runner').click()
    cy.get('#runner').should('have.class', 'active')
  })

  it('tabs should be clickable', function () {
    cy.get('#app').find('iframe')
    cy.get('.nav').first().find('.nav-item').eq(1).click().then(() => {
      cy.get('#app').not('iframe')
    })
    cy.wait(500)
    cy.get('.nav').first().find('.nav-item').first().click().then(() => {
      cy.get('#app').find('iframe')
    })
  })
})
