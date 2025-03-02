And('acesso a categoria Women', () => {
    cy.acessarWomen()
})  

And('acesso o produto {string}', (produto) => {
    cy.acessarProduto(produto)
})  

