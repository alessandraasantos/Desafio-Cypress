Given('que acesso o portal My Shop', () => {
    cy.visit('/');
});

When('realizo login no portal', () => {
    cy.acessarLogin();
    cy.realizarLogin();
});

And('valido acesso a Home', () => {
    cy.url().should('include', '/home');
    cy.get('h1').should('contain', 'Welcome');
});

And('acesso a opção de Personal Information', () => {
    cy.acessarPersonalInformation();
});

And('insiro os dados obrigatórios', () => {
    const uniqueEmail = `email_${Date.now()}@example.com`; // Gera um email único
    cy.inserirDadosObrigatorios('Nome', 'Sobrenome', uniqueEmail, '!QAZ2wsx', 'nova_senha');
});

And('confirmo a atualização dos dados', () => {
    cy.get(':nth-child(10) > .btn > span > .icon-chevron-right').click(); // Clica no botão para confirmar a atualização
});

Then('devo visualizar a mensagem Your personal information has been successfully updated', () => {
    cy.get('.alert-success').should('be.visible').and('contain.text', 'Your personal information has been successfully updated');
});