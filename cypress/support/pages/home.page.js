const BTN_ACESSA_LOGIN = '.login'
const BTN_CONTA = '.account'
const BTN_WOMEN = 'a[title="Women"]'

Cypress.Commands.add('acessarLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click();
});

Cypress.Commands.add('validarLogin', () => {
    cy.get(BTN_CONTA).should('exist')
  })

  Cypress.Commands.add('acessarWomen', () =>  {
     cy.get(BTN_WOMEN).click()
})
Cypress.Commands.add('recuperarSenha', () => {
    cy.get('.lost_password').click()
})

 
 