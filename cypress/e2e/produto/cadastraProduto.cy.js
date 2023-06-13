describe('acessa a pagina de produtos e cadastra um produto', () => {
    it('login e cadastro de produto', () => {
        cy.login()
        cy.cadastraProduto()  
    })
})