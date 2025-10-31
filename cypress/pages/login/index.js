import {elements as el} from "./elements"

class Login{

    visitarPagina(){
        cy.visit('/') //usa a baseUrl definada na 
    }

    preencherCredenciaisValidas() {
        cy.get(el.username).type(Cypress.env('username'))
        cy.get(el.password).type(Cypress.env('password'));
        cy.get(el.loginButton).click();
    }

    preencherCredenciaisInvalidas(){
        cy.get(el.username).type('user.invalid')
        cy.get(el.password).type('senha');
        cy.get(el.loginButton).click();
    }

    validarErroCredenciaisInvalidas(){
        //Assert
        cy.get(el.errorMessage)
        .should(
            'contain.text','Username and password do not match any user in this service')
        cy.screenshot('mensagem_erro')
    }
}

export default new Login()