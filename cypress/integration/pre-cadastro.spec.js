/// <reference types="cypress"/>



describe('Funcionalidade Pré-Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    it('deve completar o pre cadastro com sucesso', () => {
        cy.get('#reg_email').type('eduardo295@teste.com')
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click ()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Eduardo')
        cy.get('#account_last_name').type('Almeida')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });





});













