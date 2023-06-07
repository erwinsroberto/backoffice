describe('faz login e cria horário', () => {
    it ('cria horário', () => {
        cy.login();
        cy.novoHorario();    
    })
})