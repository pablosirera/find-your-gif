describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/auth/login')
  })

  it('shows the form', () => {
    cy.get('.form-login').should('exist')
    cy.get('.form-login').within(() => {
      cy.get('input:first').should(
        'have.attr',
        'placeholder',
        'Introduce nombre'
      )
    })
  })

  it('log in successfuly', () => {
    cy.get('.form-login input[type="text"]').type('Test')
    cy.get('.form-login input[type="email"]').type('test@test.com')

    cy.get('.form-login button').click()
    cy.location('pathname').should('eq', '/')
  })
})
