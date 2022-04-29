/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')
const faker = require('faker');

context('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)
    });

    it('Deve criar cadastro de faturamento com sucesso', () => {

    




    });





});

