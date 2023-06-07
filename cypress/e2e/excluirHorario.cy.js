describe('faz login e testa a função de excluir horario', () => {
    it('exclui o primeiro horario da lista', () => {
        cy.login();
        cy.excluirHorario();
    })
})