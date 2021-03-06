/// <reference types="cypress"/>
const faker = require('faker');



describe('Funcionalidade Pré-Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')

    });

    it('deve completar o pre cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });


    it('Deve completar o cadastro com sucesso utilizando comando customizados', () => {
        let emailFaker = faker.internet.email()
        cy.preCadastro(emailFaker, 'teste@teste.com', 'Eduardo', 'Froes')
    });


});













