Cypress.Commands.add('login', (
        username = Cypress.env('USERNAME'),
        password = Cypress.env('PASSWORD')
    ) => {
        cy.visit('/')
            cy.intercept('POST', 'https://api-homo.touch.tec.br/api/v1/users/login').as('getLogin')
            cy.get('#username').type(username, {log: false})
            cy.get('#password').type(password, {log: false})
            cy.contains('button', 'Entrar').click();
            cy.wait('@getLogin', {timeout: 5000})
            cy.get('#menu-button-17').click()
            cy.contains('button', 'Selecionar empresa').click()
            cy.contains('button', 'TOUCH').click()
    })   
    
    Cypress.Commands.add('acessaCardapio', () => {          
            cy.get('.css-1b57knf').click()
            cy.contains('div', 'Cardápio').click()
    })
    //Esse comando cria e edita o cardápio
    Cypress.Commands.add('criaCardapio', () => {
        cy.contains('button', 'Mais opções').click()
        cy.contains('button', 'Novo cardápio').click()
        cy.get('#nome').click().type('Cardápio de inverno')
        cy.get('#descricao').click().type('Esse cardápio conta com os novos lanches de inverno.')
        cy.contains('button', 'Salvar').click()
        cy.get('.chakra-select').select('Cardápio de inverno')
        cy.contains('button', 'Mais opções').click()
        cy.contains('button', 'Editar cardápio').click()
        cy.get('#nome').clear().type('Cardápio de verão')
        cy.get('#descricao').clear().type('Esse cardápio será o de verão')
        cy.contains('button', 'Salvar').click()
        })

Cypress.Commands.add('excluirCardapio', () => {
        cy.get('.chakra-select').select('Cardápio de verão')
        cy.contains('button', 'Mais opções').click()
        cy.contains('button', 'Deletar cardápio').click()
        cy.contains('button', 'Confirmar').click()
        })

Cypress.Commands.add('criaGrupo', () => {
        cy.get('.chakra-select').select('Cardápio')
        cy.get('#menu-button-60').click()
        cy.contains('button', 'Novo grupo').click()
        cy.get('#nome').click().type('BEBIDAS')
        cy.contains('button', 'Salvar').click()
        })

//Ainda não consegui fazer o cypress upar a imagem de forma automatizada
Cypress.Commands.add('uploadProduto', () => {
        cy.get(':nth-child(1) > .css-3zda8a > .css-196jp92 > .chakra-button > .chakra-aspect-ratio > .css-txi05j').click()
        cy.get('.css-lte6c0 > .chakra-button').click().selectFile('cypress/fixtures/imagem.jpeg')
       })

Cypress.Commands.add('novoProduto', () => {
        cy.get(':nth-child(1) > .css-3zda8a > .css-196jp92 > .chakra-checkbox > .chakra-checkbox__control').click();
        cy.get('#menu-button-77').click()
        cy.contains('button', 'Novo produto').click()
        cy.get('#nome').click().type('pão na chapa')
        cy.get('#preco').click().clear().type('3.50')
        cy.get('#descricao').click().type('Pão francês na chapa com margarina, acompanha um copo americano de café puro ou café com leite.')
        cy.contains('button', 'Salvar').click()
        })

Cypress.Commands.add('novoSubGrupo', () => {
        cy.get('#menu-button-67').click()
        cy.contains('button', 'Novo subgrupo').click()
        cy.get('#nome').click().type('Pães')
        cy.contains('button', 'Salvar').click()
                })

Cypress.Commands.add('novoHorario', () => {
        cy.get('.css-1b57knf').click()
        cy.contains('div', 'Horário de funcionamento').click()
        cy.contains('button', 'Incluir').click()
        cy.get('#diaSemana').select('Sábado')
        cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .inputDate').click()
        cy.get('.react-datepicker__time-list > :nth-child(57)').click()
        cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .inputDate').click()
        cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .inputDate').click()
        cy.get(':nth-child(94)').click()
        cy.get('#idCardapio').select('Cardápio')
        cy.contains('button', 'Salvar').click()
        })

Cypress.Commands.add('alterarHorario', () => {
        cy.get('.css-1b57knf').click()
        cy.contains('div', 'Horário de funcionamento').click()
        cy.get(':nth-child(1) > :nth-child(1) > .chakra-checkbox > .chakra-checkbox__control').click()
        cy.get('.chakra-button__group > :nth-child(2)').click()
        cy.get('#diaSemana').select('Sábado')
        cy.contains('button', 'Salvar').click()
        })

Cypress.Commands.add('excluirHorario', () => {
        cy.get('.css-1b57knf').click()
        cy.contains('div', 'Horário de funcionamento').click()
        cy.get(':nth-child(1) > :nth-child(1) > .chakra-checkbox >.chakra-checkbox__control').click()
        cy.get('.chakra-button__group > :nth-child(1)').click()
        cy.contains('button', 'Confirmar').click()
        })