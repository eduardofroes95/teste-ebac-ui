/// <reference types="cypress"/>
const faker = require('faker');

describe('Produtos', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(3).click()
        //last()
        //first()
        //contains('')
    });
    
    it('Adicionar produto ao carrinho', () => {
        let quantidade = 12;
        cy.get('.button-variable-item-S').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });








});