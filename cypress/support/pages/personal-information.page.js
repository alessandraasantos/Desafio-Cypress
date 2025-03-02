const BTN_ACESSA_LOGIN = '.login'; // Ajuste o seletor conforme necessário
const BTN_CONTA = '.account'; // Ajuste o seletor conforme necessário
const INPUT_FIRST_NAME = '#firstname';
const INPUT_LAST_NAME = '#lastname';
const INPUT_EMAIL = '#email';
const INPUT_GENDER_MRS = '#id_gender2';
const INPUT_DAYS = '#days';
const INPUT_MONTHS = '#months';
const INPUT_YEARS = '#years';
const INPUT_OLD_PASSWORD = '#old_passwd';
const INPUT_NEW_PASSWORD = '#passwd';
const INPUT_CONFIRM_PASSWORD = '#confirmation';
const BTN_SAVE = ':nth-child(10) > .btn > span > .icon-chevron-right';
const SUCCESS_MESSAGE = '.alert-success';

Cypress.Commands.add('acessarLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click();
});

Cypress.Commands.add('validarLogin', () => {
    cy.get(BTN_CONTA).should('exist');
});

Cypress.Commands.add('acessarPersonalInformation', () => {
    cy.get('.myaccount-link-list > :nth-child(5) > a > span').click();
});

Cypress.Commands.add('inserirDadosObrigatorios', (firstName, lastName, email, oldPassword, newPassword) => {
    cy.get(INPUT_GENDER_MRS).check(); // Seleciona "Mrs"
    cy.get(INPUT_FIRST_NAME).clear().type(firstName);
    cy.get(INPUT_LAST_NAME).clear().type(lastName);
    cy.get(INPUT_EMAIL).clear().type(email); // Limpa o campo de email antes de inserir o novo valor
    cy.get(INPUT_DAYS).select('15'); // Seleciona o dia de nascimento
    cy.get(INPUT_MONTHS).select('June'); // Seleciona o mês de nascimento
    cy.get(INPUT_YEARS).select('2003'); // Seleciona o ano de nascimento
    cy.get(INPUT_OLD_PASSWORD).clear().type(oldPassword); // Preenche a senha atual
    cy.get(INPUT_NEW_PASSWORD).clear().type(newPassword); // Preenche a nova senha
    cy.get(INPUT_CONFIRM_PASSWORD).clear().type(newPassword); // Confirma a nova senha
});

Cypress.Commands.add('confirmarAtualizacao', () => {
    cy.get(BTN_SAVE).click();
});