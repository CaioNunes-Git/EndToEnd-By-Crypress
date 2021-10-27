describe('Tickets', ()=>{
    //Antes de cada teste faz alguma coisa
    beforeEach(()=>cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    
    //Executa apenas esse teste (.only)
    it("Preencher todos os campos do tipo 'text'", ()=>{

        const firstName = "Caio";
        const lastName = "Nunes";

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type("Caio@email.com");
        cy.get('#requests').type("Carnival");
        cy.get('#signature').type(firstName + " " + lastName);
    })
    
    //Box seletor
    it('Select Tickets', ()=>{
        cy.get('#ticket-quantity').select('3');
    });

    //RadionButton (apenas uma opçao p selecionar)
    it('Select Vip Ticked type',()=>{
        cy.get('#vip').check();
    });

    //Checkbox, possibilidade de selecionar varia opçoes
    it('', ()=>{
        cy.get('#friend').check();
        cy.get('#publication').check();
    });

    //Selecionar checkbox e deselecionar
    it('', ()=>{
        cy.get('#friend').check();
        cy.get('#publication').check();
        cy.get('#friend').uncheck();
    });

    //Inicia-se as verificações
    it('ticket Box', ()=>{
        cy.get('header h1').should("contain", "TICKETBOX")
    });

    it('Alert invalid Email',()=>{
        cy.get('#email')
          .as('email') //Quando se cria um alias, ele salva o estado do elemento e mantém 
                                            //o mesmo ao longo do teste. TOMAR CUIDADO!
          .type('caionunes-gmail.com');
        //Should = deve
        cy.get('#email.invalid')
          .should('exist');

        //'@' é o prefixo para usar um alias
        cy.get('@email')
          .clear()
          .type('caionunes@gmail.com')

        cy.get('#email.invalid')
          .should('not.exist');
    })
})