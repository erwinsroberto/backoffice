describe('faz login e altera horario', () => {
    it('altera primeiro horário da lista', () => {
        cy.login();
        cy.alterarHorario();
    })
})