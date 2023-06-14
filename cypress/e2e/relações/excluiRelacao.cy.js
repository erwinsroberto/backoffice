describe('faz login, acessa tela de produtos e exclui a relação do primeiro produto da lista', () => {
    it('exclui relação do primeiro item da lista de produtos', () => {
        cy.login()
        cy.excluiRelacao()
    })
})