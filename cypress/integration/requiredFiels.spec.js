describe('required fields',()=>{
    it.only('only required fields',()=>{
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");

       const customer = {
        firstName: "Caio",
        lastName:  "Nunes",
        email: "caionunes@email.com"
       };

       cy.fillMandatoryFields(customer);

       cy.get("button[type='submit']")
          .as("submitButton")
          .should("not.be.disabled");

        cy.get("#agree").uncheck();
        
        cy.get("@submitButton").should("be.disabled");
    });
});