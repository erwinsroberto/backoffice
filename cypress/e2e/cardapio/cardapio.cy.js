//esses códigos rodam em sequência semelhante a um passo a passo e as ações são de acordo com o nome dos comandos
describe('faz login no backoffice e cria, edita, altera e exclui um cardápio', () => {
    it('testes do cardápio', () => {
        cy.login();
        cy.acessaCardapio();
        cy.criaCardapio();
        cy.excluirCardapio();
        cy.criaGrupo();
        cy.novoProduto();
        cy.novoSubGrupo();
        //cy.uploadProduto();
    })
})