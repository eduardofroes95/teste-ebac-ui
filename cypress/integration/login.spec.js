/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')

    });

    it('Deve fazer login', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'aluno_ebac')
    })

    it('Deve fazer login utilizando dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
    });

    it('Deve fazer login utilizando fixture', () => {

        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

        })
        
    });

    it('Deve aparecer uma mensagem de senha incorreta', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.co')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })

    it('Deve aparecer uma mensagem de e-mail incorreto', () => {
        cy.get('#username').type('aluno_ebac@teste.comm')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })
})