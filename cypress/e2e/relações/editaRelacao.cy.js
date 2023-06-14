describe('faz login, acessa a pagina de produtos e edita a relação do primeiro produto da lista', () => {
    it('faz login e edita relação, desmarca a opção "exibir"', () => {
        cy.login()
        cy.editaRelacao()
    })
})