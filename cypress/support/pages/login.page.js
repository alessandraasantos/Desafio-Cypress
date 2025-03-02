const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'
 
Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('usuario'))
    Cypress.env('cor', 'verde')
    cy.get(INPUT_SENHA).type(Cypress.env('senha'))
    cy.get(BTN_LOGIN).click()
})