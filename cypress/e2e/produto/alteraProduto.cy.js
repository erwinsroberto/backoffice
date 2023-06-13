describe('acessa a pagina de produtos e altera um produto cadstrado', () => {
    it('altera produto cadastrado', () => {
        cy.login()
        cy.alteraProduto()
    })
})