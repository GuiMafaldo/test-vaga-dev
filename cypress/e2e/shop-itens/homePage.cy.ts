/// <reference types="cypress" />

describe('Teste para componente HomePage', () => {
    beforeEach(() => {
        cy.visit('https://shop-item.vercel.app/')
    })
    it('deve Renderizar o nome da empresa', () => {
        cy.get('.sc-qZrbh').contains('MKS')
        cy.get('.sc-fsYfdN > p').contains('Sistemas')
    })

    it('Deve renderizar o total de items no menu', () => {
        cy.get('.sc-dmyCSP > li').should('have.length', 8)
    })

    it('Deve testar o click do botao comprar', () => {
        cy.get('#data-test-id').click()
        cy.get(':nth-child(1) > li > #data-test-id').should('have.length', 1)
        cy.get('.sc-fmKFGs').click()
    })

    it('Deve renderizar com dois itens no carrinho', () => {
        cy.get(':nth-child(4) > li > #data-test-id').click()
        cy.get(':nth-child(4) > li > #data-test-id').should('have.length', 1)
        cy.get('.sc-hABBmJ > :nth-child(4)').click()
        cy.get('.closeIcon').click()
    })
    it('deve fechar o carrinho adicionar outro item e  sair para o menu', () => {
        cy.get(':nth-child(5) > li > #data-test-id').click()
        cy.get('.sc-fmKFGs').click()
        cy.get(':nth-child(2) > li > #data-test-id').click()
        cy.get('.sc-fmKFGs').click()
    })
})