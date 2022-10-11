/// <reference types= "cypress" />

describe("Quales Course Management Test Suite",  () => {
  

  it("Validate that user can view landing page when they visit Quales learning app",  () => {
  
  //visiting the quales app url
    cy.visit("http://tawdry-rule.surge.sh")
    
    //confirm that training field is visible
    //spy on training
    cy.contains('Training').should("be.visible");

    //assert that Courses field is visible
    cy.contains('Courses').should("be.visible");

    //assert that Contact Us field is visible
    cy.contains('Contact Us').should("be.visible");

  });

  it("Validate that user with valid details can login successfully into the Quales management app",  () => {
  
    //visiting the quales app url
      cy.visit("http://tawdry-rule.surge.sh")
      
      //spy login button and click
      cy.get('.css-48p1y4 > .MuiButton-root').click();

      //spy email field and type valid email address ay@mail.com
      cy.get('[data-testid=EmailAddress]').type("ay@mail.com");

      //spy password field and type valid password pass1234
      cy.get('[data-testid=Password]').type("pass1234")

      //spy login button and click
      cy.get('.MuiButton-contained').click()

      //confirm that user gets a pop up stating Login Suuccessfull
      //spy login toast message
      cy.contains('Login Successfull').should("be.visible")

      //confirm that url contains /courses upon successful login
      cy.url().should("contain", "/courses")

      //confirm that courses module is visible
      cy.contains('Courses').should("be.visible")

      //confirm that List of Courses module is visible
      cy.contains('List of Courses').should("be.visible")

  
    });

    it("Validate that user with invalid details cannnot login successfully into the Quales management app",  () => {
  
      //visiting the quales app url
        cy.visit("http://tawdry-rule.surge.sh")
        
        //spy login button and click
        cy.get('.css-48p1y4 > .MuiButton-root').click();
  
        //spy email field and type invvalid email address yy@mail.com
        cy.get('[data-testid=EmailAddress]').type("yy@mail.com");
  
        //spy password field and type valid password pass1234
        cy.get('[data-testid=Password]').type("pass1234")
  
        //spy login button and click
        cy.get('.MuiButton-contained').click()
  
        //confirm that url contains /login confirming that user cannot login
        cy.url().should("contain", "/login")

        //confirm that user gets pop up message "Invalid Login Credenial"
        cy.contains('Invalid Login Credential').should("be.visible")
  
      
  
    
      });

});
