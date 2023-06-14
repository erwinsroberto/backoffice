describe('cria nova relação de um produto cadastrado', () => {
    it('seleciona um produto cadastrado e cria nova relação', () => {
        cy.login()
        cy.criaRelacao()
    })
})