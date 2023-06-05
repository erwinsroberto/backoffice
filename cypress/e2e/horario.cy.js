describe('faz login e testa as funções na tela de horário de funcionamento', () => {
    it ('cria horário e testa funções', () => {
        cy.login();
        cy.novoHorario();
    })
})