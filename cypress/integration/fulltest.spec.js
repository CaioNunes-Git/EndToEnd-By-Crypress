describe('Full test in aplicattion',()=>{
    beforeEach(()=>cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html'));
    it('Preenchimento dos campos',()=>{

        cy.get('#first-name').type("Caio");
        cy.get('#last-name').type("Nunes");
        cy.get('#email').type("caionunes@email.com")
        cy.get('.agreement p').should('contain', 'Caio Nunes')


        cy.get('#ticket-quantity').select(3);
        cy.get('#vip').check();
        cy.get('#friend').check();
        cy.get('#publication').check();
        cy.get('#requests').type('none');
        cy.get('#agree').check();
        cy.get('#signature').type('Caio Nunes');



        //Mesma finalidade porém feito de outra forma
        //cy.get('.active').should('exist');
        cy.get("button[type='submit']")
          .as("submitButton")
          .should("not.be.disabled");

        //cy.get('.reset').click();
        cy.get("button[type='reset']").click();
        
       // cy.get('.active').should('not.exist');
       cy.get("@submitButton").should("be.disabled");
    });
});