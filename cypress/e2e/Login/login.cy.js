

describe('Login', () => {
    beforeEach(() => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')
  })

    it('Realizar login com sucesso', () => {
        //Act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        //Assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        //Screenshot
        cy.screenshot('login_com_sucesso')

    })

     it('Realizar login com credenciais inválidas', () => {

       //Act
        cy.get('[data-test="username"]').type('user.invalid')
        cy.get('[data-test="password"]').type('senha');
        cy.get('[data-test="login-button"]').click();
        //Assert
        cy.get('[data-test="error"]')
        .should(
            'contain.text','Username and password do not match any user in this service')

       //Screnshot
       cy.screenshot('mensagem_erro')

    })

})
