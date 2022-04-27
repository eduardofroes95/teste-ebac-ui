/// <reference types="cypress"/>
const faker = require('faker');

describe('Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(3).click()
    });

    it('Adicionar produto ao carrinho', () => {
        

    });








});