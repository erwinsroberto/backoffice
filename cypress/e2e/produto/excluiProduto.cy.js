describe('acessa a pagina de produtos e exclui um produto cadastrado', () => {
    it('faz login e exclui produto', () => {
        cy.login()
        cy.excluiProduto()
    })
})