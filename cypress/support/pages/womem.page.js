const BTN_PRODUTO = '.product-container'

Cypress.Commands.add('acessarProduto', (produto) => {
    cy.get(BTN_PRODUTO).contains(produto).click()
    cy.log(Cypress.env('cor'))
    cy.pause()
})
