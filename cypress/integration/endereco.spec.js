/// <reference types="cypress"/>
// Importando a massa de dados dos perfis
const perfil = require('../fixtures/perfil.json')
// Importando  a massa de dados dos endereços
const endereco = require('../fixtures/endereco.json')
// Importando o Faker para esse arquivo
const faker = require('faker');
//abaixo estou importando a classe enderecoPage e os métodos que estão dentro da classe
import enderecoPage from '../support/page-objects/enderecopage'

context('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)
    });

    // enderecoPage é a classe e editarEnderecoFaturamento é o método dessa classe que foi chamado
    // e pode ser encotrado dentro da pasta page-objects/endereco-page

    it('Deve criar cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Eduardo', 'Almeida', 'EBAC', 'Brasil', 'Rua barros falcão', '50', 'Salvador', 'Bahia', '40279040', '71999999999', 'teste@teste.comm')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

    it('Deve criar cadastro de faturamento com sucesso usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            endereco[2].nome,
            endereco[2].sobrenome,
            endereco[2].empresa,
            endereco[2].pais,
            endereco[2].endereco,
            endereco[2].numero,
            endereco[2].cidade,
            endereco[2].estado,
            endereco[2].cep,
            endereco[2].telefone,
            endereco[2].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });





});

